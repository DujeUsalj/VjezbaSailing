import React from "react";
import classes from "./App.module.css";
import LandingStep from "./landing/landingstep/landingstep";
import Step1 from "./landing/step1/step1";
import Step2 from "./landing/step2/step2";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./routes";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.LANDING}>
        <LandingStep />
      </Route>
      <Route exact path={ROUTES.STEP1}>
        <Step1 />
      </Route>
      <Route exact path={ROUTES.STEP2}>
        <Step2 />
      </Route>
    </Router>
  );
}

export default App;
