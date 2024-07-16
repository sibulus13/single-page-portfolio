import React from "react";

const items = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Photography", href: "#photography" },
  { name: "Blog", href: "#blog" },
];

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "10px", // Add top padding of 10px
        }}
      >
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
