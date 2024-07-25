import React from "react";
import Image from "next/image";

import Contacts from "./Contacts";
import CartoonFaceshootMask from "public/profile.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="grid grid-cols-2 items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold sm:text-5xl">
              <strong>Michael Huang</strong>
            </h1>
            <p className="py font-medium">Software Engineer</p>
            <p className="description">
              Coding a better today 1 line at a time
            </p>
            <div className="pt-2">
              <Contacts />
            </div>
          </div>
          <div className="flex justify-center md:p-10 lg:p-20">
            <Image
              src={CartoonFaceshootMask}
              alt="Low poly hero picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
