import React from 'react'
import "./Footer.css";
import logo from "../assets/images/logo2up.png";
import logo2 from "../assets/images/sist.png";


const footer = () => {
  return (
    <div className='footer-bot'>
          
          
          
            <img src={logo2} alt="logo1" className="logo1"/>
       
            <img src={logo} alt="logo" className="logo" />
            <div>
           <h3 className='con-foot'>Contact us</h3>
             <ul className="con-fotfin">
               
                <li>
                    Mail
                </li>
                <li>
                    Linked in
                </li>
                <li>
                    Instagram
                </li>
             </ul>
            </div>
              
    </div>
  )
}

export default footer