import React, { useState } from "react";

// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import brand from "../assets/brand.png";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={brand} alt="logo" style={{width: '300px', marginLeft: '18px'}}/>
        </div>

        <div className="toggle-container">
          {/* <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (

              // <GiHamburgerMenu onClick={() => setNavState(false)} />
            )}
          </div> */}

          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>

      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
