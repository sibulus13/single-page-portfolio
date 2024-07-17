import React from "react";
import Link from "next/link";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
    icon: <FaInstagram />,
    link: "https://www.instagram.com/si8_goes/",
  },
];

const Contacts: React.FC = () => {
  return (
    <div style={{ display: "flex", fontSize: "16px", gap: "4px" }}>
      {contacts.map((contact, index) => (
        <Link
          key={index}
          href={contact.link}
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
