import React from "react";
import Typed from "react-typed";

const Bolgs = () => {
  return (
    <div id="blog" className="d-flex align-items-center col-10 mx-auto">
         <Typed
                    className="typed"
                    strings={["ACM-SIST Events "]}
                    typeSpeed={40}
                  />
    </div>
  );
};

export default Bolgs;
