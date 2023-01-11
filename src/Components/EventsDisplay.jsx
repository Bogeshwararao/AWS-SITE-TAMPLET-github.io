import React from 'react'
// import Item from "./Item";
// import Abhi from "../assets/images/img2p.jpg"
// import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css";
// import EventDetails from './EventDetails';
const EventsDisplay = (props) => {
  
  return (
    <>
    <div className='Total-event'>
       <div className="card" id='Event-gap'>
      <img className="card-img-top " id="event-img" src={props.img} alt="" />
      <h3 className='card-title' >{props.title}</h3>
      <p className='card-body'>{props.discription}</p>
      {/* <p>
        <button>Add to Cart</button>
      </p> */}
    </div>
    </div>
    </>
  )
}

export default EventsDisplay