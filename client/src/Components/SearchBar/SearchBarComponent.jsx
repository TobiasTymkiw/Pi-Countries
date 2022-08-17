import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./searchbar.css";

function SearchBarComponent({ onSearch }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleInputName(e) {
    e.preventDefault(e);
    setName(e.target.value);
  }

  function handleSubmit(e) {
    if (name !== "") {
      setName("");
      navigate(`/search/${name}`);
    } else {
      e.preventDefault(e);
      alert("Insert a Valid Name");
    }
  }

  return (
    <form className="'input-group">
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => handleInputName(e)}
        placeholder="Search Countries..."
      ></input>
      <button className="button--submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </form>
  );
}
export default SearchBarComponent;
