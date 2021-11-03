import React, { useEffect, useState } from "react";
import { HomeHeader } from "components/styled/Home.styled";
import { B } from "components/styled";
import { useSearchContext } from "./index";
import { useSelector } from "react-redux";
import { selectSearch } from "redux/Slice/searchSlice";

function Index() {
  const [input, setInput] = useState("");
  const { setFiltered } = useSearchContext();
  const searchCars = useSelector(selectSearch);

  useEffect(() => {
    if (!input) {
      setFiltered([]);
    }
  }, [input]);

  const onHandleInput = (input: string) => {
    setInput(input);
    const filtered = searchCars.filter(
      (e) =>
        e.carName.toLocaleLowerCase().includes(input) ||
        e.carCode.toLocaleLowerCase().includes(input)
    );

    setFiltered(filtered);
  };

  return (
    <HomeHeader>
      <B.Container>
        <h1 className="title">Car Information</h1>
        <input
          className="searchbar"
          type="text"
          placeholder="What are you looking for?"
          value={input}
          onChange={(e) => onHandleInput(e.target.value)}
        />
      </B.Container>
    </HomeHeader>
  );
}

export default Index;
