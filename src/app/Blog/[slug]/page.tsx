import React from "react";
import type { Metadata } from "next";
import ContentfulContent from "@/components/Contentful/Content";
import { getBlogPosts, getPostContent } from "@/lib/Contentful/Contentful";
import { slugify } from "@/lib/slug";

const CONTENT_TYPE = "adventure";
const BASE = "https://www.michaelhuang.ca";

interface Props {
  params: { slug: string };
  searchParams: { id?: string };
}

// Resolve a post's Contentful id from a clean slug. Falls back to a legacy `?id=` query param
// so older indexed URLs keep working.
async function resolveId(slug: string, fallbackId?: string): Promise<string | null> {
  if (fallbackId) return fallbackId;
  const posts = await getBlogPosts(CONTENT_TYPE);
  const match = posts.find(
    (p) => slugify((p.fields as { title?: string }).title ?? "") === slug
  );
  return match?.sys.id ?? null;
}

export default async function Page({ params, searchParams }: Props) {
  const id = await resolveId(decodeURIComponent(params.slug), searchParams.id);
  if (!id) {
    return <div className="py-20 text-center font-mono text-sm">Post not found.</div>;
  }
  return <ContentfulContent id={id} />;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const id = await resolveId(decodeURIComponent(params.slug), searchParams.id);
  if (!id) return { title: "Post not found" };

  const res = await getPostContent(id);
  const { title, description } = res.fields as unknown as {
    title: string;
    description: string;
  };
  const url = `${BASE}/Blog/${slugify(title)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}
