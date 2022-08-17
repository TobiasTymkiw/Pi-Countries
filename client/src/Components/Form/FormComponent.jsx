import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  getAllActivities,
  postActivity,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import validate from "./Validate";
import "./form.css";

export default function Form() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const navigate = useNavigate();
  const allActivities = useSelector((state) => state.allActivities);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  let countriesList = allCountries.map((country) => {
    return {
      name: country.name,
      flag: country.flags,
    };
  });
  let activitylist = allActivities.map((acti) => {
    return acti.name;
  });

  const [errors, setErrors] = useState({ first: true });
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  function handleButton() {
    if (errors.first === true) {
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(activity));
    alert("Activity Created Succefully");
    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    navigate("/home");
  }
  function handleChange(e) {
    setErrors(
      validate({
        ...activity,
        [e.target.name]: e.target.value,
      })
    );
    
    if (e.target.name === "name") {
      const repet = activitylist.filter(
        (acti) => acti.toUpperCase() === e.target.value.toUpperCase()
      );
      
      if (repet.length) {
        setErrors({
          ...activity,
          name: "Activity name is already in use",
        });
      }
    }
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  }
  function handleSeasons(e) {
    setActivity({
      ...activity,
      season: e.target.value,
    });
    setErrors(
      validate({
        ...activity,
        season: e.target.value,
      })
    );
  }
  function handleSelect(e) {
    setErrors(
      validate({
        ...activity,
        countries: [...activity.countries, e.target.value],
      })
    );
    if (!activity.countries.includes(e.target.value)) {
      setActivity({
        ...activity,
        countries: [...activity.countries, e.target.value],
      });
    } else {
      alert(`Country already selected (${e.target.value})`);
    }
  }
  function handleDelete(e) {
    setActivity({
      ...activity,
      countries: activity.countries.filter(
        (country) => country !== e.target.value
      ),
    });
    setErrors(
      validate({
        ...activity,
        countries: activity.countries.filter(
          (country) => country !== e.target.value
        ),
      })
    );
  }

  return (
    <div className="back">
      
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <h1>Create your activity here!</h1>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={activity.name}
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        {/*-----------*/}
        <div>
          <label>Difficulty:</label>
          <input
            type="number"
            name="difficulty"
            value={activity.difficulty}
            onChange={(e) => handleChange(e)}
          />
          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>
        {/*-----------*/}
        <div>
          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={activity.duration}
            onChange={(e) => handleChange(e)}
          />
          {errors.duration && <p>{errors.duration}</p>}
        </div>
        {/*-----------*/}
        <div>
          <label>Seasons:</label>
          <select onChange={(e) => handleSeasons(e)}>
            <option hidden>Select a Season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
          {errors.season && <p>{errors.season}</p>}
        </div>
        {/*-----------*/}
        <div>
          <label>Countries:</label>
          <select onChange={(e) => [handleSelect(e)]}>
            <option>Select</option>
            {countriesList?.map((country) => {
              return <option key={country.name}>{country.name}</option>;
            })}
          </select>
          {errors.countries && <p>{errors.countries}</p>}
        </div>
        <div>
          <span>
            {errors.hasOwnProperty("name") ||
            errors.hasOwnProperty("activity") ||
            errors.hasOwnProperty("duration") ||
            errors.hasOwnProperty("difficulty") ||
            errors.hasOwnProperty("season") ||
            errors.hasOwnProperty("countries") ? (
              <p> Please complete all the form field to create your activity</p>
            ) : (
              <button type="submit" disabled={handleButton()}>
                Create Activity
              </button>
            )}
          </span>
        </div>
        {/*-----------*/}
      </form>
      <div>
        {activity.countries.map((country) => {
          return (
            <div key={country}>
              <h5>{country}</h5>
              <button
                onClick={(e) => {
                  handleDelete(e);
                }}
                value={country}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
