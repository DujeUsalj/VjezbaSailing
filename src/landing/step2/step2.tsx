import React from "react";
import classes from "./step2.module.css";
import ArrowLeft from "./Arrow2.svg";
import ArrowRight from "./Arrow3.svg";
import { NavLink } from "react-router-dom";
function Step2() {
  return (
    <div className={classes.Step2}>
      <div className={classes.Box}>
        <div className={classes.Text}>What is your target destination?</div>
        <div className={classes.ButtonsRectangle}>
          <div className={classes.displayRow}>
            <button className={classes.Button}>
              <p className={classes.ButtonText}>Croatia 🇭🇷</p>
            </button>
            <div className={classes.Space} />
            <button className={classes.Button}>
              <p className={classes.ButtonText}>Greece 🇬🇷</p>
            </button>
          </div>
          <div className={classes.spaceColumn} />
          <div className={classes.displayRow}>
            <button className={classes.Button}>
              <p className={classes.ButtonText}>Italy 🇮🇹 </p>
            </button>
            <div className={classes.Space} />
            <button className={classes.Button}>
              <p className={classes.ButtonText}>BVI 🇻🇬</p>
            </button>
          </div>
        </div>
        <div className={classes.ArrowContainer}>
          <button className={classes.ArrowButton}>
            <NavLink to="1">
              <img src={ArrowLeft} />
            </NavLink>
          </button>
          <button className={classes.ArrowButton2}>
            <NavLink to="3">
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

export default Step2;
