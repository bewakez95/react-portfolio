import React from "react";
import man from "../assets/man.webp";
import Layouts from "./Layouts";

function About() {
  return (
    <Layouts>
      <div className="about-me flex">
        <div className="desc flex">
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
          <h3>Interest</h3>
          <p>E-sports, Football, Travelling..</p>
        </div>
        <div className="image">
          <img src={man} alt="Man image" />
        </div>
      </div>
    </Layouts>
  );
}

export default About;
