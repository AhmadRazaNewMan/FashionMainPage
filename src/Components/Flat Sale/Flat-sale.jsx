import React from 'react'
import './Flat-sale.css'
import flatSaleImg from '../../Assets/img/parallax2.jpg'
const FlatSale = () => {
  return (
    <div className='FlatSaleComponent-div'>
        <div className="mainFlatSaleImgDiv">
            <img src={flatSaleImg}  alt="" />
            <div className="whiteBack">
                <div className="pinkBack">
                 <div className="discountContent">
                    <div className="discountContentSale">
                      <h1><span className='salePercentage'>40%</span> <br /> off</h1>
                    </div>
                    <div className="flatsle">
                    <h2>FLAT SALE</h2>
                    <p>FOR LIMITED TIME</p>
                    <div className="flatSaleButton">
                       <h3>SHOP NOW</h3>
                    </div>
                
                 </div>

                 </div>
                
                 
                
                </div>
            </div>
            
        </div>
        <div className="branddealing">
          <marquee behavior="" direction=""></marquee>
        </div>
      
    </div>
  )
}

export default FlatSale