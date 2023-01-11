import React from "react";
// import Abhi from "../assets/images/img2p.jpg"
// import Typed from "react-typed";
import EventsDisplay from "../Components/EventsDisplay";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventDetails from "../Components/EventDetails";
import Footer from "../Components/Footer";

const Bolgs = () => {
  const responsive ={
    superLargeDesktop:{
    breakpoint: {max:4000,min:3000},
    items: 5
  },
  desktop:{
    breakpoint: {max:3000,min:1024},
    items: 3
  },
  tablet:{
    breakpoint: {max:1024,min:464},
    items: 2
  },
  mobile:{
    breakpoint: {max:464,min:0},
    items: 1
  }

};
  const EventDisplay= EventDetails.map((item) =>( <EventsDisplay 
      img={item.img}
      title={item.title}
      discription={item.discription}
  />));
  return (
   <>
   <h1 className="pre-event-title">Previous Event</h1>
    <Carousel showDots={true} responsive={responsive}>
        {EventDisplay}
      </Carousel>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<Footer />
   </>
  );
};

export default Bolgs;
