interface NativeConstants {
  appVersion: string;
  buildNumber: string;
  bundleId: string;
}

export interface DeviceInfoNativeModule
  extends NativeConstants {}

export interface DeviceInfoModule {
  getBuildNumber: () => string;
  getBundleId: () => string;
  getReadableVersion: () => string;
  getVersion: () => string;
}
