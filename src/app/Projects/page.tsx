import React from "react";

import PostEntry from "@/components/Posts/PostEntry";
import { getBlogPosts } from "@/Contentful/Contentful";

const type = "projects";
const parentPath = "Projects";
const Projects: React.FC = async () => {
  const posts = await getBlogPosts(type);
  return (
    <div className="pt-10">
      <h1>Project Gallery</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <div key={index} className="aspect-square">
            <PostEntry content={post} parentPath={parentPath} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;