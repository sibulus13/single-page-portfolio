"use client";
import React from "react";

import PostEntry from "../Posts/PostEntry";

export default function Projects({ content, type }) {
  const [projects, setProjects] = React.useState(content.slice(0, 4));

  const handleSeeMore = () => {
    const nextProjects = content.slice(projects.length, projects.length + 4);
    setProjects([...projects, ...nextProjects]);
  };

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 fade-in">
      {projects.map((project, index) => (
        <PostEntry content={project} key={index} parentPath={type} />
      ))}
      {projects.length < content.length && (
        <div>
          <button onClick={handleSeeMore} className="clickable font-medium">
            See More
          </button>
        </div>
      )}
    </section>
  );
}
