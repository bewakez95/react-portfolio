import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header class="flex primary-header">
        <nav class="logo flex">
          <div class="left flex">
            <h1>Bibek</h1>
            <h2 class="line">Soft. Engineer</h2>
          </div>
          <div class="right flex">
            <input type="checkbox" id="check" />
            <label for="check" class="menu-icon">
              <i class="fa-solid fa-bars"></i>
            </label>
            <ul class="flex navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/recentwork">Projects</Link>
              </li>
              <li>
                <Link to="/get">Contacts</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
