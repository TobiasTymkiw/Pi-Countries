import React from "react";
import FilterActivities from "./FilterActivities";
import FilterContinents from "./FilterContinent";
import NamesOrder from "./NamesOrder";
import PopulationOrder from "./PopulationOrder";
import "./unify.css";

export default function UnifyComponent() {
  return (
    <div>
      <label>
        <h2>Filters </h2>
      </label>
      <div className="filters">
        <div className="div">
          <h3>Continents</h3>
          <FilterContinents />
        </div>
        <div className="div">
          <h3>Activities</h3>
          <FilterActivities />
        </div>
        <div className="div">
          <h3>Names</h3>
          <NamesOrder />
        </div>
        <div className="div">
          <h3>Population</h3>
          <PopulationOrder />
        </div>
      </div>
    </div>
  );
}
