import React from "react";

import brand from "../assets/brand.png";

export default function Footer() {


  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={brand} alt="logo" style={{width: '300px', marginLeft: '-40px'}} />
          </div>
          <p>Exclusive NFT Collection</p>
        </div>
      </div>

      <div className="lower">
        <span>&copy; Copyright 2022 NFT</span>
        
        <span>Launching August 2022</span>
      </div>
    </footer>
  );
}
