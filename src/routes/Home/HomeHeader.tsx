import React from "react";
import { H } from "components/Home";
import { B } from "components";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";

function HomeHeader() {
  return (
    <H.Header>
      <B.Container>
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>

        <div className="hamberger-menu">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>

        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <a href="#about">About</a>
          </li>

          <li className="nav-item">
            <a href="#offer">Offers</a>
          </li>

          <li className="nav-item">
            <a href="#news">News</a>
          </li>

          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </B.Container>
    </H.Header>
  );
}

export default HomeHeader;
