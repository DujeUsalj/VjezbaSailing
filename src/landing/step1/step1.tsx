import React from "react";
import classes from "./step1.module.css";

import ArrowLeft from "./Arrow2.svg";
import ArrowRight from "./Arrow3.svg";
import { NavLink } from "react-router-dom";
function Step1() {
  return (
    <div className={classes.Step1}>
      <div className={classes.Box}>
        <div className={classes.Text}>
          Have you been on a sailing holiday before?
        </div>
        <div className={classes.ButtonsRectangle}>
          <button className={classes.Button}>
            <p className={classes.ButtonText}>Yes</p>
          </button>
          <div className={classes.Space} />
          <button className={classes.Button}>
            <p className={classes.ButtonText}>No</p>
          </button>
        </div>
        <div className={classes.ArrowContainer}>
          <button className={classes.ArrowButton}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <img src={ArrowLeft} />
            </NavLink>
          </button>
          <button className={classes.ArrowButton2}>
            <NavLink to="2">
              <img src={ArrowRight} />
            </NavLink>
          </button>
        </div>
      </div>
      <div className={classes.Stepper}>
        <div className={classes.Line1} />
        <div className={classes.Line2} />
      </div>
    </div>
  );
}

export default Step1;
