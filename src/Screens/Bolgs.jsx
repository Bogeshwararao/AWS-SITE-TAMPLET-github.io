import React from "react";
import BlogCard from "../Components/BlogCard";
import BlogData from "../Components/BlogData";
import Typed from "react-typed";

const Bolgs = () => {
  return (
    <div id="blog" className="d-flex align-items-center col-10 mx-auto">
      <Typed
        className="typed d-flex justify-content-center font-weight-bold pb-2"
        strings={["ACM-SIST team according to seasons"]}
        typeSpeed={40}
      />
     
    </div>
  );
};

export default Bolgs;
