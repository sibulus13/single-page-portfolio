"use client";
import React, { useState } from "react";
import PostEntry from "./PostEntry";

export default function BlogSection({ posts }: { posts: any[] }) {
  const [visible, setVisible] = useState(posts.slice(0, 4));

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {visible.map((post, index) => (
        <PostEntry content={post} key={index} parentPath="Blog" />
      ))}
      {visible.length < posts.length && (
        <div>
          <button
            onClick={() =>
              setVisible(posts.slice(0, visible.length + 4))
            }
            className="clickable font-medium"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
