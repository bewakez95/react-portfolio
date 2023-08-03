import React from "react";
import screen from "../assets/screen.png";
import Layouts from "./Layouts";

function RecentWork() {
  return (
    <Layouts>
      <div className="grid work-container" id="recent">
        <h1>My Recent Work</h1>
        <div className="flex work-list">
          <div className="work_items grid">
            <div className="items-demo">
              <img src={screen} alt="Demo" />
            </div>
            <div className="item-link">
              <a href="#">Portfolio with react</a>
            </div>
          </div>
          <div className="work_items grid">
            <div className="items-demo">
              <img src={screen} alt="Demo" />
            </div>
            <div className="item-link">
              <a href="#">Portfolio with react</a>
            </div>
          </div>
          <div className="work_items grid">
            <div className="items-demo">
              <img src={screen} alt="Demo" />
            </div>
            <div className="item-link">
              <a href="#">Portfolio with react</a>
            </div>
          </div>
          <div className="work_items grid">
            <div className="items-demo">
              <img src={screen} alt="Demo" />
            </div>
            <div className="item-link">
              <a href="#">Portfolio with react</a>
            </div>
          </div>
          <div className="work_items grid">
            <div className="items-demo">
              <img src={screen} alt="Demo" />
            </div>
            <div className="item-link">
              <a href="#">Portfolio with react</a>
            </div>
          </div>
          <div className="work_items grid">
            <div className="items-demo">
              <img src={screen} alt="Demo" />
            </div>
            <div className="item-link">
              <a href="#">Portfolio with react</a>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

export default RecentWork;
