import React from "react";
import { H } from "components/Home";

function HomeMain() {
  return (
    <H.Main>
      <H.Hero>
        <H.Container>
          <div className="main-heading">
            <h1 className="title">Discover</h1>
            <h2 className="subtitle">Luxury hotels</h2>
          </div>

          <H.ButtonGradient>
            Explore now
            <span className="dots">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </H.ButtonGradient>
        </H.Container>
      </H.Hero>
    </H.Main>
  );
}

export default HomeMain;
