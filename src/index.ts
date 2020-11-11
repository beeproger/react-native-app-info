import { DeviceInfoModule } from './internal/privateTypes';
import { Platform } from 'react-native';
import RNAppInfo from './internal/nativeInterface';

let bundleId: string;
export function getBundleId() {
  if (!bundleId) {
    if (Platform.OS === 'android' || Platform.OS === 'ios' || Platform.OS === 'windows') {
      bundleId = RNAppInfo.bundleId;
    } else {
      bundleId = 'unknown';
    }
  }
  return bundleId;
}

let buildNumber: string;
export function getBuildNumber() {
  if (!buildNumber) {
    if (Platform.OS === 'android' || Platform.OS === 'ios' || Platform.OS === 'windows') {
      buildNumber = RNAppInfo.buildNumber;
    } else {
      buildNumber = 'unknown';
    }
  }
  return buildNumber;
}

let version: string;
export function getVersion() {
  if (!version) {
    if (Platform.OS === 'android' || Platform.OS === 'ios' || Platform.OS === 'windows') {
      version = RNAppInfo.appVersion;
    } else {
      version = 'unknown';
    }
  }
  return version;
}

export function getReadableVersion() {
  return getVersion() + '.' + getBuildNumber();
}

const deviceInfoModule: DeviceInfoModule = {
  getBuildNumber,
  getBundleId,
  getReadableVersion,
  getVersion,
};

export default deviceInfoModule;
