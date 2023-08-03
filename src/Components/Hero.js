import React from "react";
import man from "../assets/man.webp";
import Layouts from "./Layouts";

function Hero() {
  return (
    <>
      <Layouts>
        <div className="hero flex" id="hero">
          <div className="image">
            <img src={man} alt="" />
          </div>
          <div className="desc">
            <h1>I am Bibek</h1>
            <h3>Full stack developer</h3>
            <h4>I love to chat with machine!</h4>
            <button className="cv">
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </Layouts>
    </>
  );
}

export default Hero;
