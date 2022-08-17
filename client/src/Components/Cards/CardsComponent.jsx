import React from "react";
import CardComponent from "../Card/CardComponent";
import './cardsComponent.css'


export default function Cardscomponent({allCountries}) {
  return (
    <div className="grid">
      {allCountries.length?
      allCountries.map((country) => {
          return (
            <CardComponent 
              key={country.id}
              id={country.id}
              name={country.name}
              flags={country.flags}
              continents={country.continents}
              population={country.population}
              activities={country.activities}
            />
          );
        }):<h2>Loading...</h2>}
    </div>
  );
}
