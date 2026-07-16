import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jhvlima.github.io/sitemap.xml",
    host: "https://jhvlima.github.io",
  };
}
