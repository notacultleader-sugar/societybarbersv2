import UIKit
import Capacitor
import AppTrackingTransparency

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    private static var hasRequestedTracking = false

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = CAPBridgeViewController()
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)
    }

    /// This app is scene-based, so `applicationDidBecomeActive` is never called.
    /// The App Tracking Transparency prompt is presented here instead — this is the
    /// single, authoritative permission flow for the app.
    func sceneDidBecomeActive(_ scene: UIScene) {
        requestTrackingPermissionIfNeeded()
    }

    private func requestTrackingPermissionIfNeeded() {
        guard !SceneDelegate.hasRequestedTracking else { return }

        if #available(iOS 14, *) {
            guard ATTrackingManager.trackingAuthorizationStatus == .notDetermined else {
                SceneDelegate.hasRequestedTracking = true
                return
            }
            SceneDelegate.hasRequestedTracking = true
            // A short delay ensures the window is fully active before iOS presents the alert.
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
                ATTrackingManager.requestTrackingAuthorization { _ in }
            }
        } else {
            SceneDelegate.hasRequestedTracking = true
        }
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}
