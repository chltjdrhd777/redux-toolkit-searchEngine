import React, { createContext, useContext, useEffect, useState } from "react";
import HomeHeader from "./Header";
import HomeMain from "./Main";
import { useDispatch } from "react-redux";
import { fetchCars } from "redux/Slice/asyncCalls";
import { DataTypes } from "redux/testData";

const searchContext = createContext<{ filterted?: DataTypes; setFiltered?: any }>({});
export const useSearchContext = () => useContext(searchContext);

function Index() {
  const dispatch = useDispatch();
  const [filterted, setFiltered] = useState<DataTypes>([]);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <searchContext.Provider value={{ filterted, setFiltered }}>
      <HomeHeader />
      <HomeMain />
    </searchContext.Provider>
  );
}

export default Index;
