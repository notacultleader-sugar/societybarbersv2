Build a test Android APK so you can try the in-app browser on a real device.

## What this will do

1. Create a production web bundle of the app.
2. Sync the bundle into the existing Capacitor Android project.
3. Attempt to build a debug APK inside the sandbox.
4. If the Android SDK is not available in the sandbox, prepare the native project so you can open it in Android Studio and build the APK on your machine.
5. Verify the `@capacitor/browser` plugin is wired into the Android project so Fresha links open inside the app.

## What you'll get

- An installable `.apk` file, or a ready-to-build Android project if the sandbox can't finish the build.
- Instructions on how to install it on an Android phone for testing.

## What I won't do in this step

- Create an iOS build (requires macOS + Xcode, which the sandbox can't run).
- Publish to the Play Store or App Store.
- Add any new app features.

## How to test the in-app browser

Once the APK is installed, open the app, tap **MY ACCOUNT**, then tap any of the Fresha links. They should open Fresha inside the app rather than switching to your phone's browser. Use the back button in the top-left of the browser to return to the app.
