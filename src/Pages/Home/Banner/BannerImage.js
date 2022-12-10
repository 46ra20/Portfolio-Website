import React from "react";
import picture from "../../../Assets/Images/image2.jpg";
const BannerImage = () => {
  return (
    <div className="my-6">
      <img src={picture} className="rounded-full w-3/4 block mx-auto p-10 border shadow-inner shadow-pink-300" />
    </div>
  );
};

export default BannerImage;
