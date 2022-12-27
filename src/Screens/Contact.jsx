import React, { useState } from "react";
import contact from "../assets/images/Contact.png";
import Typed from "react-typed";
import emailjs from "emailjs-com";
import IconCard from "../Components/IconCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const Sucessnotify = () => toast("Email has been sent sucessfully!");
  const Errornotify = () => {
    toast.error("Something gone wrong, Plz try again!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // const Errornotify = () => toast("Some thing has gone wrong, Plz try again!");

  const [result, showResult] = React.useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k60oku9",
        "service_k60oku9",
        e.target,
        "user_YusD37poMXKw4YVVOoC0s"
      )
      .then(
        (result) => {
          console.log(result.text);
          Sucessnotify();
        },
        (error) => {
          console.log(error.text);
          Errornotify();
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
        <div id="blog" className="d-flex align-items-center col-10 mx-auto">
    <Typed
      className="typed d-flex justify-content-center font-weight-bold pb-2"
      strings={["Sign in to ACM to get the latest update"]}
      typeSpeed={40}
    />
   
  </div>
    </>
  );
};

export default Contact;
