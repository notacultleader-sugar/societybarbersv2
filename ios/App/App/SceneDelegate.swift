import UIKit
import Capacitor

/// This app is scene-based (UIApplicationSceneManifest), so scene callbacks are
/// authoritative and `applicationDidBecomeActive` is never called.
///
/// There is deliberately NO App Tracking Transparency request here. The app
/// contains no analytics or advertising SDKs, never reads the IDFA, and never
/// sends device data anywhere. Booking, sign-in, memberships and gift cards open
/// Fresha's own website in SFSafariViewController (via Capacitor Browser), which
/// runs out of process; the app cannot read that session, its cookies, or any
/// data the user enters there. Per Apple's user privacy and data use guidance,
/// data the user provides by browsing a website in a browser presented by the
/// app is not data collected by the app, so no ATT authorization is required.
/// See PrivacyInfo.xcprivacy and appstore-review-notes.md.
class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = CAPBridgeViewController()
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}
