import { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bookmarks-checker-home.pages.dev";

  // 为每种语言生成URL
  const routes = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return routes;
}
