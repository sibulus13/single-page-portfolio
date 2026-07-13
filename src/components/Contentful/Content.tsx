import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/lib/Contentful/Contentful";
import { getPostContent } from "@/lib/Contentful/Contentful";
import { Document } from "@contentful/rich-text-types";
import { slugify } from "@/lib/slug";

export default async function ContentfulContent({ id }: { id: string }) {
  const res = await getPostContent(id);
  const { title, description, content, date } = res.fields as unknown as {
    title: string;
    description: string;
    content: Document;
    date: string;
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "Michael Huang",
      url: "https://www.michaelhuang.ca",
    },
    publisher: { "@type": "Person", name: "Michael Huang" },
    url: `https://www.michaelhuang.ca/Blog/${slugify(title)}`,
  };

  return (
    <div className="py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
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
