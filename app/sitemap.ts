import type { MetadataRoute } from "next";
import { seoProductPages } from "@/lib/product-pages";

const siteUrl = "https://zestfreshproducts.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/order`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...seoProductPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    }))
  ];
}
