# Plan: Expand propaganda tiles and add Instagram link

## What we'll build
- Generate **10 more** *They Live*-style propaganda posters (1024×1024) to rotate through the existing 3-tile window on the Transmissions page.
- Slow the rotation interval from 4 seconds to **7 seconds**.
- Add a bottom link to Instagram reading **"THIS WAY TO MORE PROPAGANDA"** with a small Instagram logo.

## Technical details
- New images saved as `src/assets/promo-tile-4.jpg` through `src/assets/promo-tile-13.jpg` (premium quality for text legibility, matching the existing 3).
- `src/routes/community.tsx` updated:
  - Expand `PROPAGANDA_TILES` to include all 13 images.
  - Change `setInterval` from `4000` to `7000` ms.
  - Add a styled Instagram anchor below the tile grid that opens `https://instagram.com/societybarbers`.

## Cost note
I cannot quote an exact token price for 10 premium image generations — that depends on your workspace's current AI-credit balance and the model's live rate. It will be **10 premium image generations**. If you'd like, I can check your current AI credit balance before we proceed.
