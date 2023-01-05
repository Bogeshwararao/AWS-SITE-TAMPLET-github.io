import React from "react";
import Typed from "react-typed";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Slider from '../Components/Slider/Slider'
const Home = () => {
  return (
    <>
      {/* <section id="Header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div >
                <Slider />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div >
      < Slider />
      </div>
    </>
  );
};

export default Home;
