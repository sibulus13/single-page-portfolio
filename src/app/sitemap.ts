import { MetadataRoute } from "next";

const BASE = "https://www.michaelhuang.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/Projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/Blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
