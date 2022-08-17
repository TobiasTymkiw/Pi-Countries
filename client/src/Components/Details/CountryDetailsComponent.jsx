import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";
import "./details.css";

function CountryDetailsComponent() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  const {
    name,
    flags,
    continents,
    capital,
    subregion,
    area,
    population,
    activities,
  } = country;
  let { id } = useParams();
  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  return (
    <div className="back">
      <div key={id}>
        <div>
          <img src={flags} alt={name} />
        </div>
        <div>
          <h1>Country:</h1>
          <h1>{name}</h1>
        </div>
        <div>
          <h3>Capital:</h3>
          <h3>{capital}</h3>
        </div>
        <div>
          <h3>Continent:</h3>
          <h3>{continents}</h3>
        </div>
        <div>
          <h3>Subregion:</h3>
          <h3>{subregion}</h3>
        </div>
        <div>
          <h3>Area:</h3>
          <h3>{area} km2</h3>
        </div>
        <div>
          <h3>Population:</h3>
          <h3>{population} citizens</h3>
        </div>
        <div>
          {activities &&
            activities.map((activity) => {
              return (
                <div key={activity.id}>
                  <h2>Activities:</h2>
                  <h2>Name: {activity.name}</h2>
                  <h4>Difficulty: {activity.difficulty}</h4>
                  <h4>Duration: {activity.duration}</h4>
                  <h4>Season: {activity.season}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CountryDetailsComponent;
