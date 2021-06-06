import IUserProfile from './IUserProfile';
import IViewport from './IViewport';
import IGeolocation from './IGeolocation';

export default interface IBrowserEmulatorConfiguration {
  userProfile?: IUserProfile;
  viewport?: IViewport;
  timezoneId?: string;
  locale?: string;
  geolocation?: IGeolocation;
}
