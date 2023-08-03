import React from "react";
import Layouts from "./Layouts";

function GetInTouch() {
  return (
    <Layouts>
      <section className="section6 flex" id="contact">
        <h2 className="title">Get in touch</h2>
        <div className="socials flex">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <h2 className="title">OR</h2>
        <div className="email-section flex">
          <div className="email flex">
            <p>Bewakez95@gmail.com</p>
            <a href="mailto:bewakez95@gmail.com">
              <div className="send">
                <i className="fa-solid fa-envelope"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default GetInTouch;
