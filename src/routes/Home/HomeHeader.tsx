import React, { useState } from "react";
import { H } from "components/Home";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <H.Header>
      <H.Container>
        <H.Nav menuOpen={menuOpen}>
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>

          <div className="hamberger-menu" onClick={() => setMenuOpen((prev) => !prev)}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>

          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#offer" className="nav-link">
                Offers
              </a>
            </li>

            <li className="nav-item">
              <a href="#news" className="nav-link">
                News
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </H.Nav>
      </H.Container>
    </H.Header>
  );
}

export default HomeHeader;
