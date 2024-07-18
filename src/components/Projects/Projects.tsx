import React from "react";
import Link from "next/link";

import PostEntry from "../Posts/PostEntry";

export default function Projects({ content, type }) {
  content = content.slice(0, 4); //Grab latest 4 content

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {content.map((project, index) => (
        <PostEntry content={project} key={index} parentPath={type} />
      ))}
      <div>
        <Link
          href={`/${type}`}
          className=" clickable font-medium rounded-3xl px-2 py-1 hover:bg-gray-400 hover:text-fuchsia-950"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
