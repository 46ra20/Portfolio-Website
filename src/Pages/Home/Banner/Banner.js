import React from "react";
import BannerImage from "./BannerImage";
import TextTyped from "./TextTyped";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-center">
      <div className="md:w-1/2">
        <TextTyped/>
        <div className="flex flex-col justify-center items-center">
          <p>ReactJS | NodeJS | JWT | NextJS | MongoDB | Firebase</p>
          <p><small>For icons</small></p>
        </div>
      </div>
      <div className="md:w-1/2">
        <BannerImage/>
      </div>
    </div>
  );
};

export default Banner;
