import React from "react";
import Link from "next/link";

import { FaHome, FaAngleLeft } from "react-icons/fa";

const items = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Photography", href: "#photography" },
  { name: "Blog", href: "#blog" },
];

// TODO implement animation and effect for active link
const Header: React.FC = () => {
  return (
    <div className="sticky top-0 -mx-6 lg:-mx-9 z-10 flex flex-col">
      <div className="bg-black p-2"></div>
      <nav className="rounded-full backdrop-filter backdrop-blur-3xl">
        <ul className="p-2 px-6 lg:px-8 flex justify-between items-center gap-1 text-xs md:text-lg">
          {items.map((item) => (
            <li key={item.href}>
              {item.name === "Home" ? (
                <Link href={item.href} className="md:text-2xl clickable">
                  <FaHome />
                </Link>
              ) : (
                <Link className="clickable" href={item.href}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
