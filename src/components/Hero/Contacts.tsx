import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const contacts = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/sibulus0/",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/sibulus13",
  },
  {
    icon: <TfiEmail />,
    link: "mailto:chengjie.michael.huang@gmail.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/si8_goes/",
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
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
