import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/Contentful/Contentful";
import { getPostContent } from "@/Contentful/Contentful";

export default async function ContentfulContent({ id }: { id: string }) {
  const res = await getPostContent(id);
  const { title, description, content } = res.fields as {
    title: string;
    description: string;
    content: Document;
  };

  return (
    <div className="py-10">
      <div className="px-10 lg:w-1/2 mx-auto">
        <div className="flex justify-between">
          <h1>{title}</h1>
        </div>
        <h3>{description}</h3>
        <div className="border-b-2 border-white"></div>
        <div>{documentToReactComponents(content, options)}</div>
      </div>
    </div>
  );
}
