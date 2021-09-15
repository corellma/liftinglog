import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Lifts from "../views/Lifts";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div className="NavBar" style={{ flexGrow: 1 }}>
        <AppBar style={{ background: "#282c34" }} position="static">
          <Toolbar>
            <Link to="/" style={{ flexGrow: 1, textDecoration: "none" }}>
              Lifting Log
            </Link>
            <Link color="inherit" to="/dashboard">
              Dashboard
            </Link>
            <Link color="inherit" to="/lifts">
              Lifts
            </Link>
          </Toolbar>
        </AppBar>
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
