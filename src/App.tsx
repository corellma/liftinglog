import { Container } from "@material-ui/core";
import React from "react";
import Lifts from "./views/Lifts";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Container
          disableGutters
          maxWidth={false}
          style={{ background: "#DCDCDC" }}
        >
          <NavBar />
        </Container>
      </div>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/lifts">
          <Lifts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
