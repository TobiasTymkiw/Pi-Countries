import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, getAllCountries } from "../../redux/actions";

export default function FilterContinentComponent() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.backUpCountries);
  const [continent, setContinent] = useState("");

  useEffect(() => {
    if (continent !== "") {
      if (continent === "Select") {
        dispatch(getAllCountries());
      } else {
        dispatch(filterByContinent(continent));
      }
    }
  }, [dispatch, continent]);
  const continents = () => {
    let continentsList = countries.map((country) => country.continents);
    let continents = continentsList.filter((continent, index) => {
      return continentsList.indexOf(continent) === index;
    });
    return continents;
  };

  function handleByContinent(e) {
    setContinent(e.target.value);
  }

  return (
    <div>
      <select onChange={(e) => handleByContinent(e)}>
        <option>Select</option>
        {continents().map((cont) => {
          return (
            <option key={cont} value={cont}>
              {cont}
            </option>
          );
        })}
      </select>
    </div>
  );
}
