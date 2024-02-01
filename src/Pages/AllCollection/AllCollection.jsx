import React from "react";
import "./AllCollection.css";

const AllCollection = () => {
  return (
    <div className="allCollection">
      <div className="testimonialTitle">
        <div className="horizentalLine" id="u"></div>
        <h1>ALL COLLECTIONS</h1>
        <div className="horizentalLine" id="d"></div>
      </div>

      <div className="productCollections">
        <div className="productCollection" id="menProductCollection">
          <img
            src="https://images.unsplash.com/photo-1520367745676-56196632073f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="productCollectionOverlay">
            <div className="productOverCollectionTitle">
              <div className="h-line"></div>
              <h1>
                <span id="productOverCollectionTitleSpan1">MEN </span> <br />
                <span id="productOverCollectionTitleSpan2">COLLECTION </span>
              </h1>
              <div className="h-line"></div>
            </div>
            <div className="overlayButton">
              VIEW COLLECTION &nbsp;<i class="ri-arrow-right-fill"></i>
            </div>
          </div>
        </div>

        <div className="productCollection" id="womenProductCollection">
          <img
            src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="productCollectionOverlay">
            <div className="productOverCollectionTitle">
              <div className="h-line"></div>
              <h1>
                <span id="productOverCollectionTitleSpan1" style={{opacity:1}}>WOMEN </span> <br />
                <span id="productOverCollectionTitleSpan2">COLLECTION </span>
              </h1>
              <div className="h-line"></div>
              <div
                className="checktest"
                style={{
                  width: " 280px",
                  margin: "0 22px",
                  height: "400px",
                  backgroundColor: "rgba(233, 18, 129",
                  // opacity: 0.9,
                  // zIndex: 20000,
                  paddingTop: "150px",
                  textAlign: "center",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae quo necessitatibus quae at cum minus recusandae
                adipisci! Nemo sint cum odio deserunt fugit minus libero facilis
                expedita, officiis quod commodi.
              </div>
              <div className="overlayButton" id="womenProductSectionButton">
                VIEW COLLECTION &nbsp;<i class="ri-arrow-right-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="productCollection" id="kidProductCollection">
          <img
            src="https://images.unsplash.com/photo-1622218286192-95f6a20083c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGtpZHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="productCollectionOverlay">
            <div className="productOverCollectionTitle">
              <div className="h-line"></div>
              <h1>
                <span id="productOverCollectionTitleSpan1">Kid'S </span> <br />
                <span id="productOverCollectionTitleSpan2">COLLECTION </span>
              </h1>
              <div className="h-line"></div>
              <div className="overlayButton">
                VIEW COLLECTION &nbsp;<i class="ri-arrow-right-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonialTitle">
        <div className="horizentalLine" id="up"></div>
        <h1>ALL COLLECTIONS</h1>
        <div className="horizentalLine" id="down"></div>
      </div>
      <div className="productCollections">
        <div className="productCollection" id="menProductCollection">
          <img
            src="https://images.unsplash.com/photo-1520367745676-56196632073f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="productCollectionOverlay" id="allCollectionAddToCart">
            <div className="allCollectionAddToCartOutline">
              <div className="allCollectionAddToCartCenterDiv">
                <p>
                  <i class="ri-shopping-cart-2-fill"></i> ADD TO CART
                </p>
                <p>
                  <i class="ri-heart-fill"></i>
                </p>
                <p>
                  <i class="ri-eye-fill"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="productCollection" id="womenProductCollection">
          <img
            src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="productCollectionOverlay">
          <div className="productOverCollectionTitle">
              <div className="h-line"></div>
              <h1>
                <span id="productOverCollectionTitleSpan1">MEN </span> <br />
                <span id="productOverCollectionTitleSpan2">COLLECTION </span>
              </h1>
              <div className="h-line"></div>
            </div>
            <div className="overlayButton">
              VIEW COLLECTION &nbsp;<i class="ri-arrow-right-fill"></i>
            </div>
          </div>
        </div>
        <div className="productCollection" id="kidProductCollection">
          <img
            src="https://images.unsplash.com/photo-1622218286192-95f6a20083c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGtpZHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div
            className="productCollectionOverlay"
            id="allCollectionMenOutline"
          >
            
            <div
              className="allCollectionAddToCartCenterDiv"
              id="allCollectionAddToCartCenterDiv"
            >
              <p>
                MEN <br />
                WATCH
                <br />
              </p>
            
              
            </div>
          </div>
        </div>
      </div>











      <div className="testimonialTitle">
        <div className="horizentalLine" id="up"></div>
        <h1>RECENT COLLECTIONS</h1>
        <div className="horizentalLine" id="down"></div>
      </div>
      <div className="productCollections">
        <div className="productCollection" id="firstLastDiv">
          <img
            src="https://images.unsplash.com/photo-1520367745676-56196632073f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="productCollectionOverlay" id="firstLastDiv">


          <div
              className="allCollectionAddToCartCenterDiv"
              id="allCollectionAddToCartCenterDiv"
            >
            <p>Men<br /><span className="blackCoat">black coat </span><br />
            <i class="ri-heart-fill"></i> <span className="vs_line">| </span>  <i class="ri-shopping-cart-2-fill"></i><span className="vs_line">| </span>   <i class="ri-eye-fill"></i>
            </p>
            </div>


          </div>

        </div>


        <div className="productCollection" id="secondLastDiv">
          <img
            src="https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="productCollectionOverlay"id="secondLastDiv" >
    


          <div
              className="allCollectionAddToCartCenterDiv"
              id="allCollectionAddToCartCenterDivlastSection"
            >
              <p>
                MEN <br />
                WATCH
              </p>
              <p></p>
            </div>




          </div>
        </div>



        <div className="productCollection" id="thirdLastDiv">
          <img
            src="https://images.unsplash.com/photo-1622218286192-95f6a20083c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGtpZHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="productCollectionOverlay" id="thirdLastDiv" >

     
          <div
              className="allCollectionAddToCartCenterDiv"
              id="allCollectionAddToCartCenterDivlastSection"
            >
              <p>
                MEN <br />
                WATCH
              </p>
              <p></p>
            </div>





          </div>
        </div>



        <div className="productCollection" id="forthLastDiv">
          <img
            src="https://images.unsplash.com/photo-1622218286192-95f6a20083c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGtpZHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
         <div className="productCollectionOverlay" id="forthLastDiv" >


         <div
              className="allCollectionAddToCartCenterDiv"
              id="allCollectionAddToCartCenterDivlastSection"
            >
              <p>
                MEN <br />
                WATCH
              </p>
              <p></p>
            </div>



         </div>
         </div>
        
      </div>
    </div>
  );
};

export default AllCollection;
