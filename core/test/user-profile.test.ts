import { Helpers } from '@secret-agent/testing';
import { InteractionCommand } from '@secret-agent/interfaces/IInteractions';
import IUserProfile from '@secret-agent/interfaces/IUserProfile';
import HttpRequestHandler from '@secret-agent/mitm/handlers/HttpRequestHandler';
import { ITestKoaServer } from '@secret-agent/testing/helpers';
import { createPromise } from '@secret-agent/commons/utils';
import Core from '../index';
import ConnectionToClient from '../server/ConnectionToClient';
import Session from '../lib/Session';

let koaServer: ITestKoaServer;
let connection: ConnectionToClient;
beforeAll(async () => {
  connection = Core.addConnection();
  await connection.connect();
  Helpers.onClose(() => connection.disconnect(), true);
  koaServer = await Helpers.runKoaServer();
});
afterAll(Helpers.afterAll);
afterEach(Helpers.afterEach);

describe('UserProfile cookie tests', () => {
  it('should be able to save and restore cookies', async () => {
    const meta = await connection.createSession();
    const tab = Session.getTab(meta);
    Helpers.needsClosing.push(tab.session);

    koaServer.get('/cookie', ctx => {
      ctx.cookies.set('cookietest', 'Is Set');
      ctx.body = `<body><h1>cookie page</h1></body>`;
    });

    let cookie = 'not set';
    koaServer.get('/cookie2', ctx => {
      cookie = ctx.cookies.get('cookietest');
      ctx.body = `<body><h1>cookie page 2</h1></body>`;
    });

    await tab.goto(`${koaServer.baseUrl}/cookie`);
    await tab.waitForLoad('PaintingStable');

    const profile = await connection.exportUserProfile(meta);
    expect(profile.cookies).toHaveLength(1);
    expect(profile.cookies[0].name).toBe('cookietest');
    expect(profile.cookies[0].value).toBe('Is Set');

    // try loading an empty session now to confirm cookies are gone without reloading
    const meta2 = await connection.createSession();
    const tab2 = Session.getTab(meta2);
    Helpers.needsClosing.push(tab2.session);
    const core2Cookies = await connection.exportUserProfile(meta2);
    expect(core2Cookies.cookies).toHaveLength(0);

    await tab2.goto(`${koaServer.baseUrl}/cookie2`);
    await tab2.waitForLoad('PaintingStable');
    expect(cookie).not.toBeTruthy();

    const meta3 = await connection.createSession({
      userProfile: profile,
    });
    const tab3 = Session.getTab(meta3);
    Helpers.needsClosing.push(tab3.session);
    const cookiesBefore = await connection.exportUserProfile(meta3);
    expect(cookiesBefore.cookies).toHaveLength(1);

    await tab3.goto(`${koaServer.baseUrl}/cookie2`);
    await tab3.waitForLoad('PaintingStable');
    expect(cookie).toBe('Is Set');
  });

  it('should track cookies from other domains', async () => {
    let profile: IUserProfile;
    {
      const meta = await connection.createSession();
      const tab = Session.getTab(meta);
      const session = tab.session;
      session.mitmRequestSession.blockedResources = {
        urls: ['https://dataliberationfoundation.org/cookie'],
        types: [],
        handlerFn(request, response) {
          response.setHeader('Set-Cookie', [
            'cross1=1; SameSite=None; Secure; HttpOnly',
            'cross2=2; SameSite=None; Secure; HttpOnly',
          ]);
          response.end(`<html><p>frame body</p></html>`);
          return true;
        },
      };
      koaServer.get('/cross-cookie', ctx => {
        ctx.cookies.set('cookietest', 'mainsite');
        ctx.body = `<body><h1>cross cookies page</h1><iframe src="https://dataliberationfoundation.org/cookie"/></body>`;
      });

      await tab.goto(`${koaServer.baseUrl}/cross-cookie`);
      await tab.waitForLoad('PaintingStable');
      await tab.puppetPage.frames[1].waitForLoad();

      profile = await connection.exportUserProfile(meta);
      expect(profile.cookies).toHaveLength(3);
      expect(profile.cookies[0].name).toBe('cookietest');
      expect(profile.cookies[0].value).toBe('mainsite');
      expect(profile.cookies[1].name).toBe('cross1');
      expect(profile.cookies[1].value).toBe('1');
      await tab.close();
    }
    {
      const meta = await connection.createSession({
        userProfile: profile,
      });
      const tab = Session.getTab(meta);
      const session = tab.session;

      const dlfCookies = createPromise<string>();
      const sameCookies = createPromise<string>();

      session.mitmRequestSession.blockedResources = {
        urls: ['https://dataliberationfoundation.org/cookie2'],
        types: [],
        handlerFn: (request, response) => {
          dlfCookies.resolve(request.headers.cookie);
          response.end(`<html><p>frame body</p></html>`);
          return true;
        },
      };
      koaServer.get('/cross-cookie2', ctx => {
        sameCookies.resolve(ctx.cookies.get('cookietest'));
        ctx.body = `<body><h1>cross cookies page</h1><iframe src="https://dataliberationfoundation.org/cookie2"/></body>`;
      });
      await tab.goto(`${koaServer.baseUrl}/cross-cookie2`);
      await tab.waitForLoad('PaintingStable');

      await expect(dlfCookies).resolves.toBe('cross1=1; cross2=2');
      await expect(sameCookies).resolves.toBe('mainsite');
      await tab.close();
    }
  });
});

describe('UserProfile Dom storage tests', () => {
  it('should be able to save and restore local/session storage', async () => {
    const meta = await connection.createSession();
    const tab = Session.getTab(meta);

    koaServer.get('/local', ctx => {
      ctx.body = `<body>
<h1>storage page</h1>
<script>
localStorage.setItem('Test1', 'value1');
localStorage.setItem('Test2', 'value2');
localStorage.setItem('Test3', 'value3');
localStorage.removeItem('Test2');

sessionStorage.setItem('STest1', 'value1');
sessionStorage.setItem('STest2', 'value2');
sessionStorage.setItem('STest3', 'value3');
sessionStorage.removeItem('STest3');
</script>
</body>`;
    });

    koaServer.get('/localrestore', ctx => {
      ctx.body = `<body>
<div id="local"></div>
<div id="session"></div>
<script>
const local1 = localStorage.getItem('Test1');
const local2 = localStorage.getItem('Test2');
const local3 = localStorage.getItem('Test3');
document.querySelector('#local').innerHTML = [local1,local2,local3].join(',');

const session1 = sessionStorage.getItem('STest1');
const session2 = sessionStorage.getItem('STest2');
const session3 = sessionStorage.getItem('STest3');
document.querySelector('#session').innerHTML = [session1,session2,session3].join(',');
</script>
</body>`;
    });

    await tab.goto(`${koaServer.baseUrl}/local`);
    await tab.waitForLoad('PaintingStable');

    const profile = await connection.exportUserProfile(meta);
    expect(profile.cookies).toHaveLength(0);
    expect(profile.storage[koaServer.baseUrl]?.localStorage).toHaveLength(2);
    expect(profile.storage[koaServer.baseUrl]?.sessionStorage).toHaveLength(2);

    const meta2 = await connection.createSession({
      userProfile: profile,
    });
    const tab2 = Session.getTab(meta2);

    await tab2.goto(`${koaServer.baseUrl}/localrestore`);
    await tab2.waitForLoad('PaintingStable');

    const localContent = await tab2.execJsPath([
      'document',
      ['querySelector', '#local'],
      'textContent',
    ]);
    expect(localContent.value).toBe('value1,,value3');
    const sessionContent = await tab2.execJsPath([
      'document',
      ['querySelector', '#session'],
      'textContent',
    ]);
    expect(sessionContent.value).toBe('value1,value2,');

    await tab.close();
    await tab2.close();
  });

  it('should not make requests to end sites during profile "install"', async () => {
    const mitmSpy = jest.spyOn(HttpRequestHandler, 'onRequest');
    await connection.createSession({
      userProfile: {
        cookies: [],
        storage: {
          'https://site1.org': {
            indexedDB: [],
            localStorage: [['test', 'site1.org']],
            sessionStorage: [],
          },
          'https://site2.org': {
            indexedDB: [],
            localStorage: [['test2', 'site2.org']],
            sessionStorage: [],
          },
        },
      },
    });
    expect(mitmSpy).toHaveBeenCalledTimes(0);
  });

  it('should not override changed variables on a second page load in a domain', async () => {
    const meta = await connection.createSession({
      userProfile: {
        storage: {
          [koaServer.baseUrl]: {
            indexedDB: [],
            localStorage: [['test', 'beforeChange']],
            sessionStorage: [],
          },
        },
        cookies: [],
      },
    });
    const tab = Session.getTab(meta);

    koaServer.get('/local-change-pre', ctx => {
      ctx.body = `<body>
<h1>storage page</h1>
<a href="/local-change-post">Click</a>
<script>
  localStorage.setItem('test', 'changed');
</script>
</body>`;
    });

    koaServer.get('/local-change-post', ctx => {
      ctx.body = `<body>
<div id="local"></div>
<script>
document.querySelector('#local').innerHTML = localStorage.getItem('test');
</script>
</body>`;
    });

    await tab.goto(`${koaServer.baseUrl}/local-change-pre`);
    await tab.waitForLoad('PaintingStable');

    const profile = await connection.exportUserProfile(meta);
    expect(profile.storage[koaServer.baseUrl]?.localStorage).toHaveLength(1);
    expect(profile.storage[koaServer.baseUrl]?.localStorage[0][1]).toBe('changed');

    await tab.interact([
      {
        command: InteractionCommand.click,
        mousePosition: ['window', 'document', ['querySelector', 'a']],
      },
    ]);

    const localContent = await tab.execJsPath([
      'document',
      ['querySelector', '#local'],
      'textContent',
    ]);
    expect(localContent.value).toBe('changed');

    await tab.close();
  });

  it('should store cross domain domStorage items', async () => {
    let profile: IUserProfile;
    {
      const meta = await connection.createSession();
      const tab = Session.getTab(meta);
      const session = tab.session;
      session.mitmRequestSession.blockedResources = {
        urls: ['http://dataliberationfoundation.org/storage'],
        types: [],
        handlerFn: (request, response) => {
          response.end(`<html><body><p>frame body</p>
<script>
localStorage.setItem('cross', '1');
</script>
</body>
</html>`);
          return true;
        },
      };

      koaServer.get('/cross-storage', ctx => {
        ctx.body = `<body>
<div>Cross Storage</div>
<iframe src="http://dataliberationfoundation.org/storage"></iframe>
<script>
  localStorage.setItem('local', '2');
</script>
</body>`;
      });

      await tab.goto(`${koaServer.baseUrl}/cross-storage`);
      await tab.waitForLoad('PaintingStable');
      await tab.puppetPage.frames[1].waitForLoad();
      profile = await connection.exportUserProfile(meta);
      expect(profile.storage[koaServer.baseUrl]?.localStorage).toHaveLength(1);
      expect(profile.storage['http://dataliberationfoundation.org']?.localStorage).toHaveLength(1);
      await tab.close();
    }
    {
      const meta = await connection.createSession({
        userProfile: profile,
      });
      const tab = Session.getTab(meta);
      const session = tab.session;

      session.mitmRequestSession.blockedResources = {
        urls: ['http://dataliberationfoundation.org/storage2'],
        types: [],
        handlerFn: (request, response) => {
          response.end(`<html>
<body>
<script>
window.parent.postMessage({message: localStorage.getItem('cross')}, "${koaServer.baseUrl}");
</script>
</body>
</html>`);
          return true;
        },
      };
      koaServer.get('/cross-storage2', ctx => {
        ctx.body = `<body>
<div id="local"></div>
<div id="cross"></div>
<iframe src="http://dataliberationfoundation.org/storage2"></iframe>
<script>
window.addEventListener('message', function(event) {
    document.querySelector('#cross').innerHTML = event.data.message;
    document.querySelector('#cross').classList.add('ready');
});
document.querySelector('#local').innerHTML = localStorage.getItem('local');
</script>
</body>`;
      });
      await tab.goto(`${koaServer.baseUrl}/cross-storage2`);
      await tab.waitForLoad('PaintingStable');
      const localContent = await tab.execJsPath([
        'document',
        ['querySelector', '#local'],
        'textContent',
      ]);
      expect(localContent.value).toBe('2');

      await tab.waitForElement(['document', ['querySelector', '#cross.ready']]);
      const crossContent = await tab.execJsPath([
        'document',
        ['querySelector', '#cross'],
        'textContent',
      ]);
      expect(crossContent.value).toBe('1');
      await tab.close();

      const history = tab.navigations.history;
      expect(history).toHaveLength(1);
      expect(history[0].finalUrl).toBe(`${koaServer.baseUrl}/cross-storage2`);
    }
  });
});

describe('UserProfile IndexedDb tests', () => {
  it('should be able to save and restore an indexed db', async () => {
    koaServer.get('/db', ctx => {
      ctx.body = `<body>
<h1>db page</h1>
<script>
    const openDBRequest = indexedDB.open('db1', 1);
    openDBRequest.onupgradeneeded = function(ev) {
      const db = ev.target.result;
      const store1 = db.createObjectStore('store1', {
        keyPath: 'id',
        autoIncrement: false
      });
      store1.createIndex('store1_index1', ['child','name'], {
        unique: false,
      });
      store1.createIndex('store1_index2', 'id', {
        unique: true,
      });


      db.createObjectStore('store2');
      function createStore2() {
        const insertStore = db
          .transaction('store2', 'readwrite')
          .objectStore('store2');
        insertStore.add(new Date(), '1');
        insertStore.transaction.oncomplete = () => {
         document.body.classList.add('ready');
        }
      }

      store1.transaction.oncomplete = function() {
        const insertStore = db
          .transaction('store1', 'readwrite')
          .objectStore('store1');
        insertStore.add({ id: 1, child: { name: 'Richard', age: new Date() }});
        insertStore.add({ id: 2, child: { name: 'Jill' } });
        insertStore.transaction.oncomplete = () => {
          createStore2();
        }
      };

    }
</script>
</body>`;
    });

    koaServer.get('/dbrestore', ctx => {
      ctx.body = `<body>
<div id="records"></div>
<div id="richard"></div>
<div id="date-type"></div>
<script>
  function ready(){
    document.body.classList.add('ready');
  }
  const openDBRequest = indexedDB.open('db1', 1);
  openDBRequest.onsuccess = function(ev) {
    const db = ev.target.result;
    const tx = db.transaction('store1', 'readonly').objectStore('store1');

    const recordQuery = tx.getAll();

    const completed = new Set();
    recordQuery.onsuccess = function({ target }) {
      document.querySelector('#records').innerHTML = JSON.stringify(target.result);
      completed.add('records');
      if (completed.size === 2) {
        ready();
      }
    };

    const indexQuery = tx.index('store1_index2').get(1);
    indexQuery.onsuccess = function({ target }) {
      document.querySelector('#richard').innerHTML = JSON.stringify(target.result);
      document.querySelector('#date-type').innerHTML = target.result.child.age.constructor.name;
      completed.add('richard');
      if (completed.size === 2) {
        ready();
      }
    };
  }
</script>
</body>`;
    });

    let profile: IUserProfile;
    {
      const meta = await connection.createSession();
      const core = Session.getTab(meta);
      Helpers.needsClosing.push(core);
      await core.goto(`${koaServer.baseUrl}/db`);
      await core.waitForLoad('PaintingStable');
      await core.waitForElement(['document', ['querySelector', 'body.ready']]);

      profile = await connection.exportUserProfile(meta);
      expect(profile.storage[koaServer.baseUrl]?.indexedDB).toHaveLength(1);
      const db = profile.storage[koaServer.baseUrl]?.indexedDB[0];
      expect(db.name).toBe('db1');
      expect(db.version).toBe(1);
      expect(db.objectStores).toHaveLength(2);
      expect(db.objectStores[0].name).toBe('store1');
      expect(db.objectStores[0].keyPath).toBe('id');
      expect(db.objectStores[0].indexes).toHaveLength(2);
      expect(db.objectStores[0].indexes[0].keyPath).toStrictEqual(['child', 'name']);
      expect(db.objectStores[1].name).toBe('store2');
      expect(db.objectStores[1].keyPath).not.toBeTruthy();

      expect(db.data.store1).toHaveLength(2);
    }
    {
      const meta = await connection.createSession({
        userProfile: profile,
      });
      const core = Session.getTab(meta);
      Helpers.needsClosing.push(core);

      await core.goto(`${koaServer.baseUrl}/dbrestore`);
      await core.waitForLoad('PaintingStable');
      await core.waitForElement(['document', ['querySelector', 'body.ready']]);

      const recordsJson = await core.execJsPath<string>([
        'document',
        ['querySelector', '#records'],
        'textContent',
      ]);
      const records = JSON.parse(recordsJson.value);

      expect(records).toHaveLength(2);
      expect(records[0].child.name).toBe('Richard');
      const indexLookupJson = await core.execJsPath<string>([
        'document',
        ['querySelector', '#richard'],
        'textContent',
      ]);
      const indexLookup = JSON.parse(indexLookupJson.value);
      expect(indexLookup.id).toBe(1);

      const typePreservation = await core.execJsPath([
        'document',
        ['querySelector', '#date-type'],
        'textContent',
      ]);
      expect(typePreservation.value).toBe('Date');
    }
  });
});
