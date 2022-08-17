import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

function LandingPage() {
  return (
    <div className="landing">
      <h1>It's a long road but it's worth it...</h1>
      <NavLink to="/home">
        <h1>Let's get started ➡</h1>
      </NavLink>
    </div>
  );
}

export default LandingPage;
