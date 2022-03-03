import React from "react";

import hero from "../assets/hero.png";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>

          <h1 className="title">PLAGUE SOCIAL CREATURES</h1>

          <p className="description">
          3000 RANDOMLY GENERATED PLAGUE SOCIAL CREATURES ON SOLANA
          </p>
        </div>

        <div className="image-container">
          <div className="image">
            <img src={hero} alt="Home" />
          </div>

          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
