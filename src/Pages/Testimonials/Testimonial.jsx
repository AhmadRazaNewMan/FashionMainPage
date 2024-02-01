import React from "react";
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonialTitle">
        <div className="horizentalLine" id="up"></div>
        <h1>OUR COUSTOMERS</h1>
        <div className="horizentalLine" id="down"></div>
      </div>
      <div className="coustomerAndReview" >
        <div className="coustomerImage">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww" alt="" />
        </div>
        <div className="coustomerReview">
        <strong id="commas">""</strong> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
           a voluptatem omnis cupiditate. Doloremque libero autem illum
          aperiam repellendusbr voluptatibus, aspernatur architecto eligendi.br
          Eius perspiciatis, unde obcaecati mollitia sint doloribus!
          <br />
         


          <strong id="commas">""</strong>
          <br />
          <br />
          <br />
          <br />
          <span className="Name">Joe Denly</span><br />
          <span className="place"> United Kingdom</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
