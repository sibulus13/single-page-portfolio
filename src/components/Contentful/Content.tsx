import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/Contentful/Contentful";
import { getPostContent } from "@/Contentful/Contentful";
import { Document } from "@contentful/rich-text-types";

export default async function ContentfulContent({ id }: { id: string }) {
  const res = await getPostContent(id);
  const { title, description, content, date } = res.fields as unknown as {
    title: string;
    description: string;
    content: Document;
    date: string;
  };

  return (
    <div className="py-10">
      <div className="px-10 md:px-40 lg:px-60 mx-auto">
        <p className="date">{new Date(date).toLocaleDateString()}</p>
        <div className="flex justify-between">
          <h1>{title}</h1>
        </div>
        <p className="description">{description}</p>
        <div className="border-b-2 border-black dark:border-white"></div>
        <div>{documentToReactComponents(content, options)}</div>
      </div>
    </div>
  );
}
