import React from "react";
import picture from "../../../Assets/Images/image2.jpg";

const AboutMe = () => {
  return (
    <div id="about-me" className="my-10">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">About ME</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto my-10">
        <div className="w-3/4 mx-auto">
          <p>
            Hey, First of all Thank you for visiting my portfolio. This is Md Rakib Bhuiyan. I am a full-stack web
            developer. Recently, I am compleate my web development course with
            Programming Hero. During this course, I have done many unique
            projects that challenged me to do something difficult. After
            finishing this course I can say, Yes I do. Some projects that I have
            done you see above and here is a simple list-
          </p>
          <ul className="list-disc list-inside">
            <li>JSRN Club</li>
            <li>JSRN e-Learning</li>
            <li>JSRN Book House</li>
            <li>Quiz Crackers</li>
            <li>Type Speed</li>
            <li>JSRN Kitchen</li>
          </ul>
        </div>
        <div className="mx-3 md:mx-0">
          <img
            src={picture}
            alt="about me"
            className="rounded-tr-3xl rounded-bl-3xl md:w-3/4 block mx-auto my-8"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
