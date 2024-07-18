"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { FaHome, FaAngleLeft } from "react-icons/fa";

const items = [
  { name: "Home", href: "" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Photography", href: "#photography" },
  { name: "Blog", href: "#blog" },
];
// TODO implement animation and effect for active link
const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePg = pathname === "/";
  return (
    <nav className="sticky top-3 p-2 rounded-3xl backdrop-filter backdrop-blur-3xl text-xs md:text-lg ">
      {isHomePg ? (
        <ul className="flex justify-between items-center">
          {items.map((item) => (
            <li key={item.href}>
              {item.name === "Home" ? (
                <Link href={item.href} className="md:text-2xl">
                  <FaHome />
                </Link>
              ) : (
                <Link className="hover:text-fuchsia-800" href={item.href}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex justify-between">
          <Link href={"/"} className="md:text-2xl">
            <FaHome />
          </Link>
          <button onClick={router.back}>
            <FaAngleLeft />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
