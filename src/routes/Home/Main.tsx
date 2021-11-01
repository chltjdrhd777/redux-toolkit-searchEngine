import React from "react";
import { HomeMain } from "components/styled/Home.styled";
import { B } from "components/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch } from "redux/Slice/searchSlice";

function Index() {
  const searchCars = useSelector(selectSearch);
  return (
    <HomeMain>
      <B.Container>
        {searchCars?.map((car) => (
          <div key={car.carName}>
            {car.carName} <span>car price : {car.carPrice}</span>
          </div>
        ))}
      </B.Container>
    </HomeMain>
  );
}

export default Index;
