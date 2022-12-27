import React from "react";
import Typed from "react-typed";
import main from "../assets/images/main.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <>
      <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div >
                  <Typed
                    className="typed"
                    strings={["WELCOME TO ACM-STUDENT CHAPTER"]}
                    typeSpeed={40}
                  />
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
