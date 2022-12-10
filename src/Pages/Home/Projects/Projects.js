import React from "react";
import thumbnail1 from "../../../Assets/projectThum/thumbnail1.png";
import thumbnail2 from "../../../Assets/projectThum/thumbnail2.png";
import thumbnail3 from "../../../Assets/projectThum/thumbnail6.png";
import thumbnail4 from "../../../Assets/projectThum/thumbnail5.png";

const Projects = () => {
  return (
    <div id="projects">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">Projects</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="card mx-3 md:mx-0 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={thumbnail2} alt="Shoes" />
          </figure>
          <div className="card-body items-center align-middle justify-center">
            <h2 className="card-title">JSRN Kitchen-A personal website</h2>
            <p className="flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-around">
              <a
                href="https://github.com/46ra20/JSRN-Kitchn-client-side"
                target={"_blank"}
                className=""
              >
                GitHub
              </a>
              <a
                href="https://github.com/46ra20/JSRN-Kitchn-server-side"
                target={"_blank"}
                className="border-l-2 px-2 border-r-2"
              >
                Server Side Code
              </a>
              <a
                href={"https://inspiring-cactus-bc978f.netlify.app/"}
                target={"_blank"}
                className=""
              >
                Live Side
              </a>
            </div>
          </div>
        </div>
        <div className="card mx-3 md:mx-0 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={thumbnail1} alt="Shoes" />
          </figure>
          <div className="card-body items-center align-middle justify-center">
            <h2 className="card-title">JSRN NEWS</h2>
            <p className="flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-around">
              <a
                href="https://github.com/46ra20/JSRN-NEWS24"
                target={"_blank"}
                className=""
              >
                GitHub
              </a>
              {/* <a href="https://github.com/46ra20/JSRN-Kitchn-server-side" target={'_blank'} className='border-l-2 px-2 border-r-2'>Server Side</a> */}
              <a
                href={"https://incomparable-torte-21303f.netlify.app/"}
                target={"_blank"}
                className="border-l-2 px-2"
              >
                Live Side
              </a>
            </div>
          </div>
        </div>
        <div className="card mx-3 md:mx-0 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={thumbnail3} alt="Shoes" />
          </figure>
          <div className="card-body items-center align-middle justify-center">
            <h2 className="card-title">Quiz Crackers</h2>
            <p className="flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-around">
              <a
                href="https://github.com/46ra20/Quiz-Crackerz"
                target={"_blank"}
                className=""
              >
                GitHub
              </a>
              {/* <a href="https://github.com/46ra20/JSRN-Kitchn-server-side" target={'_blank'} className=' border-r-2'>Server Side</a> */}
              <a
                href={"https://incomparable-torte-21303f.netlify.app/"}
                target={"_blank"}
                className="border-l-2 px-2"
              >
                Live Side
              </a>
            </div>
          </div>
        </div>
        <div className="card mx-3 md:mx-0 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={thumbnail4} alt="Shoes" />
          </figure>
          <div className="card-body items-center align-middle justify-center">
            <h2 className="card-title">JSRN Learning Platform</h2>
            <p className="flex-grow-0">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-around">
              <a
                href="https://github.com/46ra20/Learing-Platfrom_Client-Side"
                target={"_blank"}
                className=""
              >
                GitHub
              </a>
              {/* <a href="https://github.com/46ra20/JSRN-Kitchn-server-side" target={'_blank'} className=' border-r-2'>Server Side</a> */}
              <a
                href={"https://assignment-10-d701a.web.app/"}
                target={"_blank"}
                className="border-l-2 px-2"
              >
                Live Side
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
