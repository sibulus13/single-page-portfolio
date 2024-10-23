import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import ContentfulContent from "@/components/Contentful/Content";
import { getPostContent } from "@/lib/Contentful/Contentful";

interface Props {
  params: { id: string };
  searchParams: { id: string };
}

export default function page({ searchParams }: Props) {
  return <ContentfulContent id={searchParams.id}></ContentfulContent>;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getPostContent(searchParams.id);
  const { title, description } = res.fields as unknown as {
    title: string;
    description: string;
    content: Document;
  };

  return {
    title,
    description,
  };
}
