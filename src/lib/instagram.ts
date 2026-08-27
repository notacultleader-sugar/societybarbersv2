import { useEffect, useState } from "react";

export type InstagramPost = {
  id: string;
  permalink: string;
  thumbnailUrl: string;
  caption?: string;
};

/**
 * Fetches the latest posts for @societybarbers.
 *
 * Set VITE_INSTAGRAM_TOKEN (an Instagram Graph API long-lived access token for
 * the connected business account) to enable the live feed. Without it the grid
 * renders placeholders and the "View on Instagram" link still works.
 */
export function useInstagramFeed(limit = 3) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const token = import.meta.env['VITE_INSTAGRAM_TOKEN'] as string | undefined;
    if (!token) return;

    let cancelled = false;
    const url =
      `https://graph.instagram.com/me/media?fields=id,permalink,media_type,media_url,thumbnail_url,caption` +
      `&limit=${limit}&access_token=${encodeURIComponent(token)}`;

    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("instagram feed failed"))))
      .then((json) => {
        if (cancelled) return;
        const data = Array.isArray(json?.data) ? json.data : [];
        setPosts(
          data
            .map((item: Record<string, string>) => ({
              id: item['id'],
              permalink: item['permalink'],
              thumbnailUrl: item['thumbnail_url'] ?? item['media_url'],
              caption: item['caption'],
            }))
            .filter((p: InstagramPost) => Boolean(p.thumbnailUrl)),
        );
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return posts;
}
