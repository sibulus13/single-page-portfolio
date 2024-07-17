"use client";
import React from "react";
import { useEffect } from "react";
import PostEntry from "../Posts/PostEntry";

export default function Projects({ content }) {
  content  = content .slice(0, 4); //Grab latest 4 content 

  return (
    <section className="grid gap-4 md:grid-cols-2 md:pt-2">
      {content .map((project, index) => (
        <PostEntry content={project} key={index} />
      ))}
    </section>
  );
}
