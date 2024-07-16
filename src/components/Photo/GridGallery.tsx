import React from "react";
import Image from "next/image";

interface GridGalleryProps {
  Img1: string;
  Img2: string;
  Img3: string;
}

// Displays Imgs in a Grid where the first image is on the left and the other two are stacked on the right, or vice versa if reverse is true
const GridGallery: React.FC<GridGalleryProps & { reverse?: boolean }> = ({
  Img1,
  Img2,
  Img3,
  reverse = false,
}) => {
  return (
    <div className={"grid grid-cols-3 gap-4 pt-4"}>
      <div className={`col-span-1 ${reverse ? "order-last" : ""}`}>
        <Image
          src={Img3}
          alt={Img3}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="grid grid-rows-2 gap-4 col-span-2">
        <div className="row-span-1">
          <Image
            src={Img1}
            alt={Img1}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="row-span-1">
          <Image
            src={Img2}
            alt={Img2}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GridGallery;
