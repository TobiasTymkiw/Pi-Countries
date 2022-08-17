import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryActivity, getCountriesByName } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Cardscomponent from "../Cards/CardsComponent";
//byNameCountries getCountriesByName
function SearchNameComponent() {
  const dispatch = useDispatch();
  const byNameCountry = useSelector((state) => state.countryActivty);
  const { name } = useParams();
  useEffect(() => {
    dispatch(countryActivity(name));
  }, [dispatch, name]);

  return (
    <div className="home">
      <div>
        <h1>Showing Result to {name}</h1>
      </div>
      <div>
        <Cardscomponent allCountries={byNameCountry} />
      </div>
    </div>
  );
}

export default SearchNameComponent;
