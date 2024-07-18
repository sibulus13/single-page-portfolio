import React from "react";
import Link from "next/link";

import { FaArrowUp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="py-6 flex justify-evenly items-center">
        <Link href="" className="text-2xl clickable">
          <FaArrowUp />
        </Link>
        <p className="description">Made in Canada</p>
        {/* TODO Implement get in touch animation & logic */}
        {/* <div>
          <Link href="">
            <p className="description">Get in touch</p>
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
