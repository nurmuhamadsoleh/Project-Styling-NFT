import React from "react";

import team from "../assets/image.png";

export default function Like() {
  return (
    <div className="like" style={{padding: '30px 0 30px 0'}}>
      <div className="background">
        <div className="ellipse pink"></div>
        <div className="ellipse green"></div>
      </div>
      <div className="container">
        <img src={team} alt="team" />
      </div>
      <div className="content">
        <h1 style={{textAlign: 'center'}}>HUSKIES</h1>
        <p>HUSKIES ARE CURIOUS CREATURES.  

          THIS CURIOSITY MAKES THEM PERFECT AT SNIFFING OUT $TREATS, HOWEVER THEY'RE NOT THE MOST CAREFUL, SO THEY HAVE THE HIGHEST CHANCE AT LOSING THEM AS WELL.

          HUSKIES COLLECT 400 $TREATS PER DAY, BUT PAY A 50% TAX TO SHIBAS WHENEVER THEY CLAIM THEIR REWARD.</p>
      </div>
    </div>
  );
}
