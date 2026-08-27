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
      const mediaRes = await fetch(
        `https://graph.instagram.com/me/media?fields=id,permalink,caption,thumbnail_url,media_url&limit=3&access_token=${encodeURIComponent(token)}`,
      );
      if (!mediaRes.ok) throw new Error("Could not load Instagram media");

      const mediaJson = (await mediaRes.json()) as {
        data?: Array<Record<string, string>>;
      };

      return (mediaJson.data ?? [])
        .map((raw) => {
          const item = raw as Partial<{
            id: string;
            permalink: string;
            thumbnail_url: string;
            media_url: string;
            caption: string;
          }>;
          return {
            id: item.id ?? "",
            permalink: item.permalink ?? "",
            thumbnailUrl: item.thumbnail_url ?? item.media_url ?? "",
            ...(item.caption ? { caption: item.caption } : {}),
          } as InstagramPost;
        })
        .filter((p) => Boolean(p.thumbnailUrl));
    } catch (error) {
      console.error("Instagram feed error:", error);
      return [];
    }
  },
);



