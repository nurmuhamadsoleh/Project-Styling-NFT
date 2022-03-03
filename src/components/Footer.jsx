import React from "react";

import logo from "../assets/logo.png";

export default function Footer() {


  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
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
