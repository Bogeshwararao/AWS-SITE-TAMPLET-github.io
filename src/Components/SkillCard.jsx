import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = (props) => {
  return (
    <div
      className="card"
      style={{
        margin: "5px",
        width: "4rem",
        padding: "5px",
        backgroundColor: " #F8F9FA",
        borderRadius: "10px",
        boxShadow: "1px 3px 3px #e8eaed",
      }}
    >
      <img className="card-img-top" src={props.iconsrc} alt="Card-img" />
    </div>
  );
};

export default SkillCard;
