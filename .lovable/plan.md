# App icon and animated splash screen

## What we will build

Replace the native app icon with a new design that combines the Society Barbers logo and the "look good" astronaut image, and replace the static splash screen with an in-app animated DOS/CRT terminal loader in the *They Live* dystopian theme.

## Plan

### 1. Generate new app icon source
- Create a 1024x1024 source image (`assets/icon.png`) combining the Society Barbers logo with the astronaut/look-good artwork in the background, on a black cyberpunk canvas.
- Keep it readable at small sizes and avoid fine text that will blur on a phone home screen.

### 2. Build the animated DOS splash component
- Create a full-screen web splash component that runs for 3–5 seconds before revealing the app.
- Style it like an old CRT monitor on a black background: green/cyan phosphor text, scanlines, subtle flicker, terminal cursor.
- Display scrolling "code" lines mixed with *They Live* propaganda words: `OBEY`, `CONSUME`, `SUBMIT`, `STAY FRESH`, `LOOK GOOD`, plus barbershop-flavored fake commands and progress messages.
- End with a reveal/fade into the app.
- Show it only on native app launch, not every route navigation.

### 3. Native splash screen update
- Set the native splash screen to a plain black image/background so the animated web splash appears seamlessly while the web view loads.
- Update `capacitor.config.json` SplashScreen settings to use black (`#000000`) and a duration that keeps the native splash visible long enough for the web view to be ready.

### 4. Regenerate native assets
- Use `@capacitor/assets` to regenerate all required Android and iOS icons and splash screens from the new source files.
- This updates `android/app/src/main/res/mipmap-*` and `ios/App/App/Assets.xcassets/`.

### 5. Update web/PWA icons
- Regenerate/rescale favicon, apple-touch-icon, and PWA manifest icons (`public/icon-*.png`, `icons/icon-*.webp`) from the same 1024x1024 source so the app icon is consistent everywhere.

### 6. Build and verify
- Run the mobile build script and sync Capacitor.
- Smoke-test that the app launches, shows the CRT animation, then lands on the home screen.

## Notes
- Native splash screens are static, so the animation will live inside the app; the native splash will be black to avoid a jarring transition.
- `@capacitor/assets` is already installed in the project, so we can use the standard `npx capacitor-assets generate` workflow.
