import React from "react";
import Hero from "./sections/Hero";
import Booking from "./sections/Booking";
import Hotel from "./sections/Hotels";

function HomeMain() {
  return (
    <main>
      <Hero />
      <Booking />
      <Hotel />
    </main>
  );
}

export default HomeMain;
