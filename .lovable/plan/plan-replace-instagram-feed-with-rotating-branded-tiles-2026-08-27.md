# Plan: Replace Instagram feed with rotating branded tiles

Drop the Instagram Graph API integration and use three custom-generated promotional tiles on the Transmissions page instead.

## What will be built

- Generate three branded tiles in the Society Barbers "They Live" dystopian style (neon, bold propaganda-style text, barbershop/razor/scissor imagery). Tiles will be saved as project assets.
- Update `src/routes/community.tsx` to display the three tiles in the existing 3-tile grid.
- Add a subtle rotation/cycling effect so the tiles periodically switch places or fade between states, keeping the section visually alive.
- Keep the next-holiday-closure notice at the top of Transmissions.
- Remove the Instagram server-function dependency (`src/lib/instagram.functions.ts`) and its TanStack Query wiring since real-time Instagram fetching is no longer needed.

## Out of scope

- No Instagram API token setup.
- No user-uploaded photos (unless you want to swap in your own later).

## Deliverable

Transmissions page will show the holiday closure first, then three rotating branded Society Barbers promo tiles in the same card style the rest of the app uses.
