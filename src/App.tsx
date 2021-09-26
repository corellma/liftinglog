import { Container } from "@material-ui/core";
import React from "react";
import SubmitLift from "./views/submitlift";
import Home from "./views/home";
import PRs from "./views/prs";
import NavBar from "./components/navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AllLifts from "./views/lifts";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Container disableGutters maxWidth={false}>
          <NavBar />
        </Container>
      </div>
      <Switch>
        <Route path="/prs">
          <PRs />
        </Route>
        <Route path="/alllifts">
          <AllLifts />
        </Route>
        <Route path="/submitlift">
          <SubmitLift />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
