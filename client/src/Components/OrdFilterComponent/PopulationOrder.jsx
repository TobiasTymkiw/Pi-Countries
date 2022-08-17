import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByMinPopulation,
  filterByMaxPopulation,
  getAllCountries,
} from "../../redux/actions";

export default function PopulationOrderComponent() {
  const dispatch = useDispatch();
  const [population, setPopulation] = useState("");

  useEffect(() => {
    if (population !== "") {
      if (population === "Select") {
        dispatch(getAllCountries());
      }
      if (population === "Max") {
        dispatch(filterByMaxPopulation());
      }
      if (population === "Min") {
        dispatch(filterByMinPopulation());
      }
    }
  }, [dispatch, population]);

  function handlePopulationOrder(e) {
    setPopulation(e.target.value);
  }
  return (
    <div>
      <select onChange={(e) => handlePopulationOrder(e)}>
        <option>Select</option>
        <option value="Max">Ascend</option>
        <option value="Min">Descend</option>
      </select>
    </div>
  );
}
