import React from "react";
import { HomeMain } from "components/styled/Home.styled";
import { B } from "components/styled";
import { useSelector } from "react-redux";
import { selectSearch } from "redux/Slice/searchSlice";
import { useSearchContext } from "./index";

function Index() {
  const searchCars = useSelector(selectSearch);
  const { filterted, setFiltered } = useSearchContext();
  return (
    <HomeMain>
      <B.Container>
        {filterted?.map((car) => (
          <ul className="search-list" key={car.carName}>
            <li className="search-item">
              {car.carName} <span>car price : {car.carPrice}</span>
            </li>
          </ul>
        ))}
      </B.Container>
    </HomeMain>
  );
}

export default Index;
