import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function PostEntry(props: any) {
  const { content, value, parentPath } = props;
  const { title, description, thumbnail, date } = content.fields;
  const { id } = content.sys;
  const { url, title: alt } = thumbnail.fields.file;
  const tags = content.fields.tags ?? [];
  const githubLink = content.fields.githubLink ?? null;

  return (
    <div className="">
      <div
        className="bg-cover bg-center aspect-square rounded-3xl flex justify-center items-center"
        style={{ backgroundImage: `url("https:${url}")` }}
      >
        <div className="bg-black bg-opacity-70 p-2 rounded-xl w-2/3">
          <p>{new Date(date).toDateString()}</p>
          <h2>{title}</h2>
          {githubLink && (
            <Link href={githubLink}>
              <FaGithub />
            </Link>
          )}
          <p className="text-xs">{description}</p>
          <div>
            {tags.map((tag: any, index: number) => (
              <span
                className="text-xs border border-white rounded-3xl px-2 py-1 mr-2 mb-2 inline-block"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
