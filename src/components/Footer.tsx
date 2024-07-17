import React from "react";
import Link from "next/link";

import { FaHome } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="py-6 flex justify-evenly items-center">
        <Link href="#" className="text-2xl clickable">
          <FaHome />
        </Link>
        <div className="flex flex-col items-center">
          <p className="description">Made in Canada</p>
          <p className="description">© 2024 Michael Huang</p>
        </div>
        {/* TODO Implement get in touch animation & logic */}
        {/* <div>
          <Link href="">
            <p className="description">Get in touch</p>
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
