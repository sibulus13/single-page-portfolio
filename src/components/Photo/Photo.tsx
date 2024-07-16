import React from "react";
import GridGallery from "./GridGallery";

import Img1 from "@public/photos/1.jpg";
import Img2 from "@public/photos/2.jpg";
import Img3 from "@public/photos/3.jpg";
import Img4 from "@public/photos/4.jpg";
import Img5 from "@public/photos/5.jpg";
import Img6 from "@public/photos/6.jpg";

const Imgs = [Img1, Img2, Img6, Img4, Img5, Img3];
const Photo: React.FC = () => {
  return (
    <div>
      {Imgs.map((img, index) => {
        if ((index + 1) % 3 === 0) {
          return (
            <div key={index}>
              <GridGallery
                Img1={Imgs[index - 2]}
                Img2={Imgs[index - 1]}
                Img3={img}
                reverse={index % 2 === 0}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Photo;
