import React from "react";
import { ButtonGradient } from "components/styled/Buttons.styled";
import { B } from "components/styled";
import { Hero } from "components/styled/Hero.styled";

function HomeHero() {
  return (
    <Hero>
      <B.Container>
        <div className="main-heading">
          <h1 className="title">Discover</h1>
          <h2 className="subtitle">Luxury hotels</h2>
        </div>

        <ButtonGradient>
          Explore now
          <span className="dots">
            <i className="fas fa-ellipsis-h"></i>
          </span>
        </ButtonGradient>
      </B.Container>
    </Hero>
  );
}

export default HomeHero;
