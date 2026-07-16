import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jhvlima.github.io/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jhvlima.github.io/vitrine/",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
