import React, { useState, createContext, useContext, useEffect } from "react";
import HomeHeader from "./Header";
import HomeMain from "./Main";
import { useDispatch } from "react-redux";
import { fetchCars } from "redux/Slice/searchSlice";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello");
    dispatch(fetchCars());
  }, []);

  return (
    <>
      <HomeHeader />
      <HomeMain />
    </>
  );
}

export default Index;
