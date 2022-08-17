import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByNameDesc,
  filterByNameAsc,
  getAllCountries,
} from "../../redux/actions";

export default function NamesOrderComponent() {
  const dispatch = useDispatch();
  const [alphabet, setAlphabet] = useState("");

  useEffect(() => {
    if (alphabet !== "") {
      if (alphabet === "Select") {
        dispatch(getAllCountries());
      }
      if (alphabet === "Asc") {
        dispatch(filterByNameAsc());
      }
      if (alphabet === "Desc") {
        dispatch(filterByNameDesc());
      }
    }
  }, [dispatch, alphabet]);
  function handleOrderName(e) {
    setAlphabet(e.target.value);
  }
  return (
    <div>
      <select onChange={(e) => handleOrderName(e)}>
        <option>Select</option>
        <option value="Asc">Ascend</option>
        <option value="Desc">Descend</option>
      </select>
    </div>
  );
}
