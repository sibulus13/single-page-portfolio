import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function PostEntry(props: any) {
  const { content, parentPath } = props;
  const { title, description, thumbnail, date } = content.fields;
  const { id } = content.sys;
  const { url, title: alt } = thumbnail.fields.file;
  const tags = content.fields.tags ?? [];
  const githubLink = content.fields.githubLink ?? null;

  return (
    <div className="relative group">
      <Link
        href={{
          pathname: `/${parentPath}/` + title,
          query: {
            id: id,
          },
        }}
        className="bg-cover bg-center aspect-square rounded-3xl flex justify-center items-center transition duration-300 group-hover:scale-95 group-hover:opacity-60"
        style={{ backgroundImage: `url("https:${url}")` }}
      ></Link>
      <div className="bg-white dark:bg-black bg-opacity-70 p-2 rounded-xl w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="flex items-center">
          <h2 className="mr-2">{title}</h2>
          {githubLink && (
            <Link
              href={githubLink}
              className="clickable pointer-events-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </Link>
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
    </div>
  );
}
