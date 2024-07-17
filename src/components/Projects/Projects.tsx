import React from "react";

import PostEntry from "../Posts/PostEntry";
import { getBlogPosts } from "@/Contentful/contentful";

export default async function Projects({ content_type }) {
  let projects = await getBlogPosts(content_type);
  projects = projects.slice(0, 3); //Grab latest 3 projects

  return (
    <section id="projects" className="grid gap-4">
      {projects.map((project, index) => (
        <PostEntry content={project} key={index} />
      ))}
    </section>
  );
}
