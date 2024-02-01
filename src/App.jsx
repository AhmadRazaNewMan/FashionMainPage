import React from 'react';
import Carousal from './Components/carousal/Carousal'
import NavBar from './Components/Nav/Nav';
import Footer from './Components/footer/Footer';
import Testimonial from './Pages/Testimonials/Testimonial';
// import RecentCollection from './Pages/RecentCollection/RecentCollection';
import AllCollection from './Pages/AllCollection/AllCollection';
import FlatSale from './Components/Flat Sale/Flat-sale';
// import Home from './Pages/Home/Home';


function App() {
  return (
  
     <>
     <div className="Nav">
      <NavBar/>
     </div>
     <div className="Main">
      <Carousal/>
     </div>
     <div className="allCollectionDiv">
      <AllCollection/>
     </div>
     <div className="flatSaleDiv">
      <FlatSale/>
     </div>
     <div className="testimonialDiv">
      <Testimonial/>
     </div>
     <div className="footerDiv">
      <Footer/>
     </div>
    
     </>
       

  );
}

export default App;
