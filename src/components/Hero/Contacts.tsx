import React from "react";
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
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.icon}
        </a>
      ))}
    </div>
  );
};

export default Contacts;
