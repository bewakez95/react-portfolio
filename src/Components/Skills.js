import React from "react";
import Layouts from "./Layouts";

function Skills() {
  return (
    <Layouts>
      <section>
        <div className="skill-container flex" id="skills">
          <i className="fa-brands fa-html5 fa-7x"></i>
          <i className="fa-brands fa-css3-alt fa-7x"></i>
          <i className="fa-brands fa-js fa-7x"></i>
          <i className="fa-brands fa-node-js fa-7x"></i>
        </div>
      </section>
    </Layouts>
  );
}

export default Skills;
