# Plan: Show live Instagram photos in the app

## What this will do
- Securely store the Instagram/Facebook Graph API token you just pasted.
- Add a server-side fetcher so the token never ships inside the app code.
- Pull the latest 3 images from @societybarbers.
- Show them on the Transmissions (Community) page, with a "View on Instagram" button that opens in-app.
- Keep the next-stat-holiday closure banner at the top of the page.

## Why server-side?
Instagram tokens are sensitive: if they sit in the app code, anyone could copy them. Fetching the feed from a `createServerFn` keeps the token hidden in Lovable Cloud.

## Plan steps
1. Save the pasted token as `INSTAGRAM_ACCESS_TOKEN` in Lovable Cloud secrets.
2. Create a server function `getInstagramFeed` that:
   - Calls Facebook's Graph API (`/me?fields=instagram_business_account`).
   - Reads the business account's recent media (limit 3).
   - Returns thumbnail URL, permalink, and caption for each post.
3. Update `src/routes/community.tsx` to call the server function instead of the current client-only placeholder hook.
4. Keep the existing placeholder fallback: if the token is missing or the API call fails, the page still shows 3 sparkle placeholders and the "View on Instagram" button.
5. Add a small note/loading state so the user knows the feed is fetching on first load.

## Open questions
- The token you pasted looks like a short-lived Facebook user token. Do you want me to try to exchange it for a 60-day long-lived token automatically, or just use it as-is for now?
- If the account isn't yet linked to a Facebook Business Page with an Instagram Business account, the feed will fail. Are you okay with me attempting the fetch and reporting back what error (if any) comes back?
