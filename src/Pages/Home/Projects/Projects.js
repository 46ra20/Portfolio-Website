import React from "react";
import thumbnail1 from '../../../Assets/projectThum/thumbnail1.png';
import thumbnail2 from '../../../Assets/projectThum/thumbnail2.png';
import thumbnail3 from '../../../Assets/projectThum/thumbnail6.png';
import thumbnail4 from '../../../Assets/projectThum/thumbnail5.png';

const Projects = () => {
    const allProject = [
        {"name":"JSRN Kitchen-A personal website","thumbnail":thumbnail2,"gitHubClient":"https://github.com/46ra20/JSRN-Kitchn-client-side","gitHubServer":"https://github.com/46ra20/JSRN-Kitchn-server-side","live":"https://inspiring-cactus-bc978f.netlify.app/"},
        {"name":"JSRN E-Learning - Online Media","thumbnail":thumbnail4,"gitHubClient":"https://github.com/46ra20/Learing-Platfrom_Client-Side","gitHubServer":"","live":"https://assignment-10-d701a.web.app/"},
        {"name":"JSRN NEWS","thumbnail":thumbnail1,"gitHubClient":"https://github.com/46ra20/JSRN-NEWS24","gitHubServer":"","live":"https://46ra20.github.io/JSRN-NEWS24/"},
        {"name":"Quiz Crackerz","thumbnail":thumbnail3,"gitHubClient":"https://github.com/46ra20/Quiz-Crackerz","gitHubServer":"","live":"https://incomparable-torte-21303f.netlify.app/"}
    ]
  return (
    <div>
        {
            allProject.map((project,i) => <Projects project={project} key={i}></Projects>)
        }
    </div>
  );
};

export default Projects;
