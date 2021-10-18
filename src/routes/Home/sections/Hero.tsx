import React from "react";
import { B } from "components/styled";
import { Hero, MainHeading } from "components/styled/Home.styled";

function HomeHero() {
  return (
    <Hero>
      <B.Container>
        <MainHeading>
          <h1 className="title">Discover</h1>
          <h2 className="subtitle">Luxury hotels</h2>
        </MainHeading>

        <B.Button className="gradient">
          Explore now
          <span className="dots">
            <i className="fas fa-ellipsis-h"></i>
          </span>
        </B.Button>
      </B.Container>
    </Hero>
  );
}

export default HomeHero;
