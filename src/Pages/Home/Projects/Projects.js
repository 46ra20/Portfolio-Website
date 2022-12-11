import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(r=> r.json())
    .then(d=>setData(d))
  },[])


  return (
    <div id="projects">
      <div>
        <h2 className="divider mb-8 text-3xl font-bold">Projects</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        { 
          data.map(project => <Project project={project} key={project.id}></Project>)
        }
      </div>
    </div>
  );
};

export default Projects;
