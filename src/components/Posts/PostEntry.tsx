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
    // TODO this link seems to cause hydration failure
    <Link
      href={{
        pathname: `/${parentPath}/` + title,
        query: {
          id: id,
        },
      }}
      className="bg-cover bg-center aspect-square rounded-3xl flex justify-center items-center"
      style={{ backgroundImage: `url("https:${url}")` }}
    >
      <div className="bg-black bg-opacity-70 p-2 rounded-xl w-2/3">
        <div className="flex items-center">
          <h2 className="mr-2">{title}</h2>
          {githubLink && (
            <Link href={githubLink} className="clickable">
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
    </Link>
  );
}
