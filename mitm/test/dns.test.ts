import INetworkEmulation from '@secret-agent/interfaces/INetworkEmulation';
import { LookupAddress, promises as nodeDns } from 'dns';
import { Helpers } from '@secret-agent/testing';
import DnsOverTlsSocket from '../lib/DnsOverTlsSocket';
import { Dns } from '../lib/Dns';
import RequestSession from '../handlers/RequestSession';

const CloudFlare = {
  host: '1.1.1.1',
  servername: 'cloudflare-dns.com',
};

const Google = {
  host: '8.8.8.8',
  servername: 'dns.google',
};

const Quad9 = {
  host: '9.9.9.9',
  servername: 'dns.quad9.net',
};

let dns: Dns;
let requestSession: RequestSession;
beforeAll(() => {
  requestSession = new RequestSession(
    'dns.test',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
    null,
    {
      socketSettings: {
        tlsClientHelloId: 'Chrome83',
      },
      dns: {
        dnsOverTlsConnection: Quad9,
      },
    } as INetworkEmulation,
  );
  Helpers.onClose(() => requestSession.close(), true);
  dns = new Dns(requestSession);
});

afterAll(() => {
  dns.close();
  return Helpers.afterAll();
});

describe('DnsOverTlsSocket', () => {
  let cloudflareDnsSocket: DnsOverTlsSocket;
  beforeAll(() => {
    cloudflareDnsSocket = new DnsOverTlsSocket(CloudFlare, requestSession);
  });
  afterAll(() => {
    cloudflareDnsSocket.close();
  });

  test('should be able to lookup dns records', async () => {
    const response = await cloudflareDnsSocket.lookupARecords('dataliberationfoundation.org');
    expect(response.answers).toHaveLength(1);
  });

  test('should be able to reuse the socket', async () => {
    const response = await cloudflareDnsSocket.lookupARecords('ulixee.org');
    expect(response.answers).toHaveLength(2);
  });

  test('should be able to lookup multiple records at once', async () => {
    const response = await Promise.all([
      cloudflareDnsSocket.lookupARecords('headers.ulixee.org'),
      cloudflareDnsSocket.lookupARecords('tls.ulixee.org'),
      cloudflareDnsSocket.lookupARecords('stateofscraping.org'),
    ]);
    expect(response).toHaveLength(3);
  });

  test('should be able to lookup with google', async () => {
    let socket: DnsOverTlsSocket;
    try {
      socket = new DnsOverTlsSocket(Google, requestSession);
      const response = await socket.lookupARecords('ulixee.org');
      expect(response.answers).toHaveLength(2);
    } finally {
      socket.close();
    }
  });

  test('should be able to lookup a record after a miss', async () => {
    const item1 = await cloudflareDnsSocket.lookupARecords('double-agent.collect');
    expect(item1).toBeTruthy();
    // @ts-ignore - trigger internal eof
    cloudflareDnsSocket.mitmSocket.emit('eof');
    const response = await Promise.all([
      cloudflareDnsSocket.lookupARecords('sub.double-agent.collect'),
      cloudflareDnsSocket.lookupARecords(' double-agent-external.collect'),
    ]);
    expect(response).toHaveLength(2);
  });
});

test('should cache and round robin results', async () => {
  const domain = 'stateofscraping.org';
  const spy = jest.spyOn<any, any>(dns, 'lookupDnsEntry');
  const ip = await dns.lookupIp(domain);
  expect(ip).toBeTruthy();
  expect(Dns.dnsEntries.get(domain).isResolved).toBeTruthy();

  const cached = await Dns.dnsEntries.get(domain).promise;
  expect(cached.aRecords).toHaveLength(2);

  const ip2 = await dns.lookupIp(domain);
  expect(ip2).toBeTruthy();
  // should round robin
  expect(ip).not.toBe(ip2);
  expect(spy).toHaveBeenCalledTimes(1);
});

test('should lookup in the local machine if not found in DoT', async () => {
  const lookupSpy = jest.spyOn(nodeDns, 'lookup').mockImplementationOnce(async () => {
    return [
      <LookupAddress>{
        address: '127.0.0.1',
        family: 4,
      },
    ] as any;
  });
  const domain = 'double-agent.collect';
  const systemLookupSpy = jest.spyOn<any, any>(dns, 'systemLookup');

  const ip = await dns.lookupIp(domain);
  expect(ip).toBeTruthy();
  expect(Dns.dnsEntries.get(domain).isResolved).toBeTruthy();

  const cached = await Dns.dnsEntries.get(domain).promise;
  expect(cached.aRecords).toHaveLength(1);
  expect(lookupSpy).toHaveBeenCalledTimes(1);
  expect(systemLookupSpy).toHaveBeenCalledTimes(1);
});

test('should properly expose errors if nothing is found', async () => {
  const lookupSpy = jest.spyOn(nodeDns, 'lookup').mockClear();
  const dotLookup = jest
    .spyOn<any, any>(dns, 'lookupDnsEntry')
    .mockClear()
    .mockImplementationOnce(() => {
      throw new Error('Not found');
    });
  const systemLookupSpy = jest.spyOn<any, any>(dns, 'systemLookup').mockClear();

  let unhandledErrorCalled = false;
  const handler = () => {
    unhandledErrorCalled = true;
  };
  process.once('unhandledRejection', handler);

  try {
    await dns.lookupIp('not-real-123423423443433434343-fake-domain.com');
  } catch (error) {
    // eslint-disable-next-line jest/no-try-expect
    expect(error.message).toMatch('Not found');
  }

  await new Promise(resolve => setTimeout(resolve, 100));
  expect(unhandledErrorCalled).toBe(false);
  expect(dotLookup).toHaveBeenCalledTimes(1);
  expect(lookupSpy).toHaveBeenCalledTimes(1);
  expect(systemLookupSpy).toHaveBeenCalledTimes(1);
  process.off('unhandledRejection', handler);
});
