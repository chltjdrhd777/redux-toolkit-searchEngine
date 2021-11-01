import React, { useState } from "react";
import { HomeHeader } from "components/styled/Home.styled";
import { B } from "components/styled";

function Index() {
  return (
    <HomeHeader>
      <B.Container>
        <h1 className="title">Car Information</h1>
        <input className="searchbar" type="text" placeholder="What are you looking for?" />
      </B.Container>
    </HomeHeader>
  );
}

export default Index;
