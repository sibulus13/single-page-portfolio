import React from "react";
import Image from "next/image";

import Contacts from "./Contacts";
import CartoonFaceshootMask from "public/Cartoon Faceshoot Mask.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="grid md:grid-cols-2 items-center justify-center md:text-left text-center gap-2">
          <div className="flex justify-center md:order-2 md:py-16 lg:px-20">
            <Image src={CartoonFaceshootMask} alt="Low poly hero picture" />
          </div>
          <div className="md:order-1">
            <h1 className="text-3xl font-bold sm:text-5xl">
              <strong>Michael Huang</strong>
            </h1>
            <p className="py font-medium">Software Engineer</p>
            <p className="description">
              Coding a better today 1 line at a time
            </p>
            <div className="pt-2 grid justify-center md:justify-start">
              <Contacts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
