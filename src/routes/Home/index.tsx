import React from "react";
import { H } from "components/Home";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";

function Home() {
  return (
    <H.Media>
      <HomeHeader />
      <HomeMain />
    </H.Media>
  );
}

export default Home;
