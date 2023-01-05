import React, { useState } from "react";
import Typed from "react-typed";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
 

  return (
    <>
      <div className=" align-items-center col-10 mx-auto">
                  <Typed
                    className="typed"
                    strings={["ACM-SIST Contact "]}
                    typeSpeed={40}
                  />
                 
                </div>
                
    </>
  );
};

export default Contact;
