import React from "react";
import "./Home.scss";
import ProductGrid from "../pieces/ProductGrid";
import bannerImage from "../assets/images/banner-shoes.png";


const Home = () => {
  return (
    <>
    
    <div className="container">
      <div className="banner">
        <div className="banner-content">
          <h1></h1> <br /> 
           <p></p> <br />
          {/* <a href="#" className="btn"></a> */}
        </div>
        
      </div>

      <ProductGrid />
    </div>
    </>
  );
};

export default Home;
