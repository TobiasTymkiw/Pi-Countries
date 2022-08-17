import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function CardComponent({
  id,
  name,
  flags,
  continents,
  activities,
}) {
  return (
    <div key={id} className="card">
      <div>
        <Link to={`/countries/${id}`}>
          <img src={flags} alt="img not found" className="img" />
        </Link>
      </div>
      <h1 className="h1">{name}</h1>
      <p className="">Continent: {continents}</p>
      <ul>
        {activities?.map((activity) => {
          return <li key={activity.id}>Activities: {activity.name}</li>;
        })}
      </ul>
    </div>
  );
}
/* .card-img {
  background-color: #ffcaa6;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
} */
