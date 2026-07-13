import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/Contentful/Contentful";
import { slugify } from "@/lib/slug";

const BASE = "https://www.michaelhuang.ca";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/Projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/Blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  try {
    const posts = await getBlogPosts("adventure");
    for (const p of posts) {
      const f = p.fields as { title?: string; date?: string };
      if (!f.title) continue;
      entries.push({
        url: `${BASE}/Blog/${slugify(f.title)}`,
        lastModified: f.date ? new Date(f.date) : now,
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  } catch {
    // Contentful unavailable at build time — ship the static entries above.
  }

  return entries;
}
