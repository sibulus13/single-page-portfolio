"use client";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function PostEntry(props: any) {
  const { content, parentPath } = props;
  const { title, description, thumbnail, date } = content.fields;
  const { id } = content.sys;
  const { url, title: alt } = thumbnail.fields.file;
  const tags = content.fields.tags ?? [];
  const githubLink = content.fields.githubLink ?? null;

  const router = useRouter();
  const toGithub = () => {
    // Without this, a nested link would cause hydration failure
    router.push(githubLink);
  };

  return (
    <Link
      href={{
        pathname: `/${parentPath}/` + title,
        query: {
          id: id,
        },
      }}
      className="bg-cover bg-center aspect-square rounded-3xl flex justify-center items-center hover:scale-95 transition-transform duration-300"
      style={{ backgroundImage: `url("https:${url}")` }}
    >
      <div className="bg-black bg-opacity-70 p-2 rounded-xl w-2/3">
        <div className="flex items-center">
          <h2 className="mr-2">{title}</h2>
          {githubLink && (
            <button
              onClick={(e) => {
                toGithub();
                e.stopPropagation();
              }}
              className="clickable"
            >
              <FaGithub className="text-2xl" />
            </button>
          )}
        </div>
        <p className="description">{description}</p>
        <div>
          {tags.map((tag: any, index: number) => (
            <span className="pill" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
