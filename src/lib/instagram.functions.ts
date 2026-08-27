import { createServerFn } from "@tanstack/react-start";

export type InstagramPost = {
  id: string;
  permalink: string;
  thumbnailUrl: string;
  caption?: string;
};

export const getInstagramFeed = createServerFn({ method: "GET" }).handler(
  async (): Promise<InstagramPost[]> => {
    const token = process.env["INSTAGRAM_ACCESS_TOKEN"];
    if (!token) return [];

    try {
      // Find the Instagram Business Account linked through the user's Facebook Pages.
      const meRes = await fetch(
        `https://graph.facebook.com/v21.0/me?fields=accounts{instagram_business_account}&access_token=${encodeURIComponent(token)}`,
      );
      if (!meRes.ok) throw new Error("Could not load Facebook pages");

      const meJson = (await meRes.json()) as {
        accounts?: {
          data?: Array<{ instagram_business_account?: { id: string } }>;
        };
      };

      const igAccount = meJson.accounts?.data?.find(
        (page) => page.instagram_business_account,
      )?.instagram_business_account;
      if (!igAccount?.id) throw new Error("No Instagram business account linked");

      const mediaRes = await fetch(
        `https://graph.facebook.com/v21.0/${igAccount.id}/media?fields=id,permalink,caption,thumbnail_url,media_url&limit=3&access_token=${encodeURIComponent(token)}`,
      );
      if (!mediaRes.ok) throw new Error("Could not load Instagram media");

      const mediaJson = (await mediaRes.json()) as {
        data?: Array<Record<string, string>>;
      };

      return (mediaJson.data ?? [])
        .map((raw) => {
          const item = raw as Partial<Record<keyof InstagramPost, string>>;
          return {
            id: item["id"] ?? "",
            permalink: item["permalink"] ?? "",
            thumbnailUrl: item["thumbnail_url"] ?? item["media_url"] ?? "",
            ...(item["caption"] ? { caption: item["caption"] } : {}),
          } as InstagramPost;
        })
        .filter((p) => Boolean(p.thumbnailUrl));
    } catch (error) {
      console.error("Instagram feed error:", error);
      return [];
    }
  },
);

