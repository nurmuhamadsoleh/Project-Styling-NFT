import React from "react";
import Card from "./Card";

import super1 from "../assets/img1.png";
import super2 from "../assets/img2.png";
import super3 from "../assets/img3.png";
import super4 from "../assets/img4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
    },
    {
      image: super2,
    },
    {
      image: super3,
    },
    {
      image: super4,
    },
  ];

  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>

        <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a href="https://opensea.io/">OpenSea</a>.
        </p>
      </div>
      
      <div className="cards">
        {data.map(({ image}, index) => (
          <Card
            image={image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
