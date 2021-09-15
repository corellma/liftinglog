import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Lifts from "../views/Lifts";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { Button, Link } from "@material-ui/core";

export default function NavBar() {
  return (
    <Router>
      <div className="NavBar" style={{ flexGrow: 1 }}>
        <AppBar style={{ background: "#282c34" }} position="static">
          <Toolbar>
            <Link
              component={RouterLink}
              to="/"
              variant="h6"
              color="inherit"
              style={{ flexGrow: 1, textDecoration: "none" }}
            >
              Lifting Log
            </Link>
            <Button color="inherit" component={RouterLink} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" component={RouterLink} to="/lifts">
              Lifts
            </Button>
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
