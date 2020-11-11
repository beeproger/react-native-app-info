package com.learnium.RNAppInfo;

import android.content.pm.PackageInfo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.module.annotations.ReactModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;

@ReactModule(name = RNDeviceModule.NAME)
public class RNDeviceModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RNAppInfo";

  public RNDeviceModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @Nonnull
  public String getName() {
    return NAME;
  }

  @Override
  public Map<String, Object> getConstants() {
    String appVersion, buildNumber;

    try {
      appVersion = getPackageInfo().versionName;
      buildNumber = Integer.toString(getPackageInfo().versionCode);
    } catch (Exception e) {
      appVersion = "unknown";
      buildNumber = "unknown";
    }

    final Map<String, Object> constants = new HashMap<>();

    constants.put("bundleId", getReactApplicationContext().getPackageName());
    constants.put("appVersion", appVersion);
    constants.put("buildNumber", buildNumber);

    return constants;
  }

  private PackageInfo getPackageInfo() throws Exception {
    return getReactApplicationContext().getPackageManager().getPackageInfo(getReactApplicationContext().getPackageName(), 0);
  }
}
