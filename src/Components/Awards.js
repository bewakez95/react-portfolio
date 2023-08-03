import React from "react";
import Layouts from "./Layouts";

function Awards() {
  return (
    <Layouts>
      <div className="award-container">
        <div className="award-list flex">
          <div className="awards flex">
            <div className="circle flex">
              <div className="icon">
                <i className="fa-solid fa-award fa-2x"></i>
              </div>
            </div>

            <div className="award-desc">
              <h2>IT graduate</h2>
              <h4>Distinction</h4>
            </div>
          </div>
          <div className="awards flex">
            <div className="circle flex">
              <div className="icon">
                <i className="fa-solid fa-award fa-2x"></i>
              </div>
            </div>

            <div className="award-desc">
              <h2>IT graduate</h2>
              <h4>Distinction</h4>
            </div>
          </div>
          <div className="awards flex">
            <div className="circle flex">
              <div className="icon">
                <i className="fa-solid fa-award fa-2x"></i>
              </div>
            </div>

            <div className="award-desc">
              <h2>IT graduate</h2>
              <h4>Distinction</h4>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default Awards;
