import React from "react";
import Link from "next/link";

import { FaArrowUp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="py-6 mt-10 flex justify-evenly items-center border-t-2 border-black dark:border-white">
        <Link href="#home" className="text-2xl clickable">
          <FaArrowUp />
        </Link>
        <p className="description">Made in Canada</p>
      </div>
    </footer>
  );
}
