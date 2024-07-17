import React from "react";
import Link from "next/link";

import { FaHome } from "react-icons/fa";

const items = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Photography", href: "#photography" },
  { name: "Blog", href: "#blog" },
];
// TODO implement animation and effect for active link
const Header: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-between pt-3 text-xs md:text-lg items-center">
        {items.map((item) => (
          <li key={item.href}>
            {item.name === "Home" ? (
              <Link href={item.href} className="md:text-2xl">
                <FaHome />
              </Link>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
