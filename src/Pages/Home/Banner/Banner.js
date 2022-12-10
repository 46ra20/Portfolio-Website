import React from "react";
import BannerImage from "./BannerImage";
import TextTyped from "./TextTyped";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-center">
      <div className="md:w-1/2">
        <TextTyped/>
      </div>
      <div className="md:w-1/2">
        <BannerImage/>
      </div>
    </div>
  );
};

export default Banner;
