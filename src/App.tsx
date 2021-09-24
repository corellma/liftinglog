import { Container } from "@material-ui/core";
import React from "react";
import SubmitLift from "./views/SubmitLift";
import Home from "./views/Home";
import PRs from "./views/PRs";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AllLifts from "./views/AllLifts";

function App() {
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

export default App;
