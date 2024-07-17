import { createClient } from "contentful";
import { env } from "process";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

export const client = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_DELIVERY_ID,
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async (content_type: string) => {
  const response = await client.getEntries({
    content_type: content_type,
  });
  return response.items;
};
