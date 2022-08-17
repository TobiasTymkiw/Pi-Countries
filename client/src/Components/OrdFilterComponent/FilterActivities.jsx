import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivities, getAllActivities } from "../../redux/actions";

export default function FilterActivitiesComponent() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(filterByActivities(activities));
  }, [dispatch, activities]);

  function handleActivities(e) {
    if (e.target.value !== "Select" && !activities.includes(e.target.value)) {
      setActivities([...activities, e.target.value]);
    }
  }
  function handleDeleteActivities(e) {
    setActivities(activities.filter((activity) => activity !== e.target.value));
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handleActivities(e)}>
          <option>Select</option>
          {allActivities.map((act) => {
            return (
              <option key={act.name} value={act.name}>
                {act.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {activities.map((activity) => {
          return (
            <div key={activity}>
              <p>{activity}</p>
              <button
                onClick={(e) => handleDeleteActivities(e)}
                value={activity}
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
