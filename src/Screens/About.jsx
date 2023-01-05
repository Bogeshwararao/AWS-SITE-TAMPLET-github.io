import React from "react";
import Typed from "react-typed";
const About = () => {
  return (
    <section id="Header" className="d-flex align-items-center col-10 mx-auto">
            <div className=" align-items-center">
                  <Typed
                    className="typed"
                    strings={["About ACM-SIST ABout "]}
                    typeSpeed={40}
                  />
                 
                </div>
                
    </section>
  );
};

export default About;
