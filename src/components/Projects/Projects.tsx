import React from "react";

import PostEntry from "../Posts/PostEntry";
import { getBlogPosts } from "@/Contentful/contentful";

export default async function Projects({ content_type }) {
  let projects = await getBlogPosts(content_type);
  projects = projects.slice(0, 4); //Grab latest 4 projects

  return (
    <section
      id="projects"
      className="grid gap-4 md:grid-cols-2 md:pt-2"
    >
      {projects.map((project, index) => (
        <PostEntry content={project} key={index} />
      ))}
    </section>
  );
}
