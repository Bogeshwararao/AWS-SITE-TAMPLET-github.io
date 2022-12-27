import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconCard = (props) => {
  return (
    <div
      className="card icon-card"
      style={{
        zIndex: "1",
        margin: "5px",
        width: "2.5rem",
        padding: "5px",
        backgroundColor: " #F8F9FA",
        borderRadius: "10px",
        boxShadow: "1px 3px 3px #e8eaed",
      }}
    >
      <a href={props.link} target="/blank">
        <img className="card-img-top" src={props.iconsrc} alt="Card-img" />
      </a>
    </div>
  );
};

export default IconCard;
