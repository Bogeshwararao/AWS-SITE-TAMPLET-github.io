import React from "react";
import Profilecard from "../Components/Profilecard";
import Leaddetails from "../Components/Leaddetails";
import Footer from "../Components/Footer";
// import Projects from "../../../Portfolio/src/Screens/Projects";

const Projects = () => {
  return (
    <>
    <div id="blog" className="my-4 mx-4 blog px-5">
    <h1>Leads</h1>
      <div className="row">
        
        {Leaddetails.map((value, ind) => {
          return (
            <Profilecard
              key={ind}
              title={value.title}
              description={value.description}
              imgsrc={value.imgsrc}
              link={value.link}
            ></Profilecard>
          );
        })}
      </div>
      
    </div>
    < Footer />
    </>
  );
};

export default Projects;
