import React from "react";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>

          <div className="ellipse green"></div>
        </div>

        <div className="content">
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
