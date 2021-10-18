import React from "react";
import classes from "./landingstep.module.css";
import { NavLink } from "react-router-dom";
function LandingStep() {
  return (
    <div className={classes.Landing}>
      <div className={classes.Rectangle}>
        <div className={classes.Text}>
          Welcome to your personal sailing guide!
        </div>
        <div className={classes.Small}>
          Get guided to determine the best fit for your saling vacation.
        </div>
      </div>
      <button className={classes.Button}>
        <NavLink to="/landingstep/1" style={{ textDecoration: "none" }}>
          <p className={classes.No}>Start Planning</p>
        </NavLink>
      </button>
    </div>
  );
}

export default LandingStep;
