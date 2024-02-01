import React from "react";
import "./Carousal.css";
import Image1 from "./CarousalImages/1.jpg";
import Image2 from "./CarousalImages/2.jpg";
import Image3 from "./CarousalImages/3.jpg";

const Carousal = () => {
  return (
    <div className="carousalDiv">
      <div className="carousalOverlay">
        <div className="carousalOverlayContent">
          <div className="topC">
            <h1>WOMEN</h1>
            <h4>
              COLLECTION
              <span>
                SALE <br />
                FOR LIMITED TIME
              </span>
            </h4>
          </div>
          <div className="middleC">
            <h2>PINK LIGHT</h2>
            <h4>ADHERENT RESINOUS BASE COAT</h4>
          </div>
          <div className="bottomC">
            <button>
              SHOP NOW <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100 " alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100 " alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100 " alt="Slide 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
