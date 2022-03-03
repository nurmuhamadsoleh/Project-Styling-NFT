import React from "react";

import team from "../assets/image.png";

export default function Like() {
  return (
    <div className="like" style={{padding: '30px 0 30px 0'}}>
      <div className="background">
        <div className="ellipse pink"></div>
        <div className="ellipse green"></div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column'}}>
        <h2 style={{color: '#e7e2e2', fontSize: '22px'}}>WHO WE ARE?</h2>
        <p className="sub-title" style={{fontSize: '16px', color: '#ffffff', marginTop: '10px', marginBottom: '5px'}}>Launching Soon</p>
        <h3 style={{color: '#ffffff', fontSize: '44px', padding: '5px 0 45px 0'}}>TEAM MEMBERS</h3>
      </div>

      <div className="container">
            <img src={team} alt="team" />
          {/* <div className="image">
          </div>
        <div className="thumbnail">
      </div> */}
        

        {/* <figure>
          <img src={team} alt="Team" width={130} height={130} style={{borderRadius: '50%'}}/>
          <figcaption style={{color: '#fff', textAlign: 'center', paddingTop: '10px', fontWeight: 'bolder'}}>TEAM</figcaption>
        </figure>

        <figure>
          <img src={team} alt="Team" width={130} height={130} style={{borderRadius: '50%'}}/>
          <figcaption style={{color: '#fff', textAlign: 'center', paddingTop: '10px', fontWeight: 'bolder'}}>TEAM</figcaption>
        </figure>

        <figure>
          <img src={team} alt="Team" width={130} height={130} style={{borderRadius: '50%'}}/>
          <figcaption style={{color: '#fff', textAlign: 'center', paddingTop: '10px', fontWeight: 'bolder'}}>TEAM</figcaption>
        </figure>

        <figure>
          <img src={team} alt="Team" width={130} height={130} style={{borderRadius: '50%'}}/>
          <figcaption style={{color: '#fff', textAlign: 'center', paddingTop: '10px', fontWeight: 'bolder'}}>TEAM</figcaption>
        </figure> */}
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
