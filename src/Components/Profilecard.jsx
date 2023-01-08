import React from "react";
import Insta from "./instagram.png";
import Linked from "./linkedin.png";
import Mail from "./email.png";
const Profilecard = (props) => {
  return (
    <div className="col-md-3 col-0 mx-auto my-2">
      <div className="card blog-card ">
        <a href={props.link}>
          <img
           id="Profile-img"
            className="card-img-top Project-Card-img rounded-circle"
            src={props.imgsrc}
            alt="Card-img"
          />
        </a>
        <div className="card-body">
          <h5 id="Title-team" className="card-title font-weight-bold">{props.title}</h5>
          <p id="Title-team-des" className="card-text">{props.description}</p>
          <ul className="d-flex list-icon">
          <li></li>
          <li  id="Mail-icon"><a><img src={Mail} alt="" ></img></a></li>
          <li  id="Linked-icon" ><a><img src={Linked} alt="" ></img></a></li>
            <li  id="Insta-icon"><a><img src={Insta} alt="" ></img></a></li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;