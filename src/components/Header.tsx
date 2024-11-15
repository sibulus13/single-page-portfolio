"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaHome, FaAngleLeft } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitcher";

const items = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#photography" },
  { name: "Blog", href: "#blog" },
];

// TODO implement animation and effect for active link
const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePg = pathname === "/";
  // TODO nav bar text not accessible when hovering over certain elements, consider adding an outline of some sort
  return (
    <div className="sticky top-0 -mx-6 z-10 flex flex-col">
      <nav className="p-2 px-6 rounded-full backdrop-filter backdrop-blur-3xl text-xs md:text-lg">
        {isHomePg ? (
          <ul className="flex justify-between items-center gap-1">
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
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        ) : (
          <div className="flex justify-between">
            <button
              className="clickable"
              onClick={() => router.back()}
              title="Go back"
            >
              <FaAngleLeft />
            </button>
            <ThemeSwitch />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
