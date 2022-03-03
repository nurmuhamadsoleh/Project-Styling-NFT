import React from "react";
// import Card from "./Card";

// import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>

          <div className="ellipse green"></div>
        </div>

        <div className="content">
          {/* <div className="image">
            <img src={icon} alt="icon" />
          </div> */}
          <div className="section">
            <h2 className="title">Wen Plague Social Creatures Mint ??</h2>
            <h4 className="headline">Minting Live</h4>
            <p className="description">
              Supply : 3000 Plague
              <br />
              Wl : 1 sol
              <br />
              Public : 1,5 sol
            </p>
            <span>.............................</span>
            <br />
            <h3 style={{textAlign: 'center'}}>Alien <span>Doodles</span></h3>
            <h2 className="judul" style={{textAlign: 'center'}}>About Project</h2>
            <p className="description" style={{fontSize: '16px', marginTop: '10px', textAlign: 'justify'}}>
              Originally just a derivative based on 100% pfp artwork with no intentions of releasing a roadmap nor discord. Due too high demand we have raised the supply from 444 to 1111 and decided too deliver a detailed roadmap. 
            </p>
          </div>
          <div className="thumbnail">
              <img src={super1} alt="super1"/>
              <img src={super2} alt="super1"/>
              <img src={super3} alt="super1"/>
              <img src={super4} alt="super1"/>
          </div>
        </div>
      </div>
      
      {/* <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div> */}
    </div>
  );
}
