import React from "react";
import SkillCard from "../Components/SkillCard";
import Typed from "react-typed";
const Skills = () => {
  return (
    <section id="Header" className="d-flex align-items-center col-10 mx-auto">
            <div className=" align-items-center">
                  <Typed
                    className="typed"
                    strings={["About ACM-SIST "]}
                    typeSpeed={40}
                  />
                 
                </div>
                
    </section>
  );
};

export default Skills;
