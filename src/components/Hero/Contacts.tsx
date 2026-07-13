import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sibulus0/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/sibulus13",
    label: "GitHub",
  },
];

const Contacts: React.FC = () => {
  return (
    <div className="flex text-2xl gap-2">
      {contacts.map((contact, index) => (
        <Link
          className="clickable"
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={contact.label}
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
