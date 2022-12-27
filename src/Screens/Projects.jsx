import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectData from "../Components/ProjectData";
import Typed from "react-typed";

const Projects = () => {
  return (
    <>
       <div className=" align-items-center col-10 mx-auto">
                  <Typed
                    className="typed"
                    strings={["ACM-SIST Events "]}
                    typeSpeed={40}
                  />
                 
                </div>
                
    </>
  );
};

export default Projects;
