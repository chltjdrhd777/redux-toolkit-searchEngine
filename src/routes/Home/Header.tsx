import React, { useState } from "react";
import { Header, Nav, Logo } from "components/styled/Header.styled";
import { B } from "components/styled";
import { Link } from "react-router-dom";
import LogoImg from "assets/images/logo.png";

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <B.Container>
        <Nav menuOpen={menuOpen}>
          <Logo src={LogoImg} alt="logo" />

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
        </Nav>
      </B.Container>
    </Header>
  );
}

export default HomeHeader;
