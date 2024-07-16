import React from "react";
import Image from "next/image";

import Contacts from "./Contacts";
import CartoonFaceshootMask from "@public/cartoon profile.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="left-column">
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              <strong>Michael Huang</strong>
            </h1>
            <p>Software Engineer</p>
            <p>Coding a better today 1 line at a time</p>
            <div style={{ paddingTop: "4px" }}>
              <Contacts />
            </div>
          </div>
          <div className="right-column">
            <Image
              src={CartoonFaceshootMask}
              alt="Hero Cartoon Profile Image"
              style={{ paddingBottom: "40px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
