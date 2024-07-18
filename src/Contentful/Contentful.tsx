import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import { env } from "process";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

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

// Fetch the content of a specific blog post
export const getPostContent = async (id: string) => {
  const response = await client.getEntry(id);
  return response;
};

export const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <b>{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <div>
        <p className="pt-1">{children}</p>
      </div>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className={"pt-4"}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <div>
        <h2 className="text-2xl pt-4">{children}</h2>
      </div>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-xl pt-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-lg">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-base">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-sm">{children}</h6>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="text-sm">{children}</blockquote>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="text-gray-500">{children}</li>
    ),
    [BLOCKS.HR]: (node: any, children: any) => <hr className="pt-4" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <div>
        <br />
        <div className="mx-auto">
          <Image
            className="rounded-lg object-contain"
            src={"https:" + node.data.target.fields.file.url}
            alt={node.data.target.fields.file.title}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          ></Image>
        </div>
        <p className="flex justify-center">{node.data.target.fields.title}</p>
        <br />
      </div>
    ),
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <Link href={node.data.uri}>
        <span className="underline">{children}</span>
      </Link>
    ),
  },
};
