import React from "react";
import "./Footer.css";
import payement from "../../Assets/img/payment.png";
import flogo from "../Nav/logo.png";
// import './text.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="flogo">
          <img
            src={flogo}
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="fNewsLetter"><label htmlFor="email" >NEWSLETTER</label>
        <input type="email" placeholder="Enter Your Address...." id="email" />
        </div>
        <div className="fButton">
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footerBottom">
        <div className="getInTouch">
            <h5>GET IN TOUCH</h5>
            Lorem ipsum dolor sit amet,<br />
             consectetur adipisicing elit. <br />
             Quam, nesciunt maxime! Fugiat, <br />
             consectetur adipisci omnis <br />
              odit sit nam enim ipsum!
          <div className="footerImages"> 
            <img
              src={payement}
              width={100}
              height={50}
              style={{ objectFit: "contain"}}
              alt=""
            />
          </div>
          <div className="socialLinks">
          <i class="ri-facebook-box-fill"></i>
          <i class="ri-twitter-line"></i>
          <i class="ri-linkedin-box-fill"></i>
          <i class="ri-instagram-fill"></i>
          </div>
        </div>
        <div className="verticleLine"></div>
        <div className="myAccount"><h5>MY ACCOUNT</h5>
        Lorem ipsum <br />dolor sit amet,<br />
             consectetur adip isicing elit. <br />
             Quam, nesciunt ma <br />
             xime! Fugiat, <br />
             consectetur adipi <br />
             sci omnis <br />
              odit sit nam enim <br />
               ipsum!</div>
              <div className="verticleLine"></div>
        <div className="information"><h5>INFORMATION</h5>
        Lorem ipsum dolor sit amet,<br />
             consectetur adipisicing elit. <br />
             Quam, nesciunt maxime! Fugiat, <br />
             consectetur adipisci omnis <br />
              odit sit nam enim ipsum!</div>
              <div className="verticleLine"></div>
        <div className="support"><h5>SUPPORT</h5>
        Lorem ipsum dolor sit amet,<br />
             consectetur adipisicing elit. <br />
             Quam, nesciunt maxime! Fugiat, <br />
             consectetur adipisci omnis <br />
              odit sit nam enim ipsum!</div>
      </div>

      <span><strong>2017 @ all rights reserved by apieros</strong> <button><i class="ri-arrow-up-s-line"></i></button></span>
       
    </div>
  );
};

export default Footer;
