import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Lifts from "../views/Lifts";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div className="NavBar" style={{ flexGrow: 1 }}>
        <AppBar style={{ background: "#282c34" }} position="static">
          <Toolbar>
            <Link
              variant="h6"
              color="inherit"
              href="/"
              style={{ flexGrow: 1, textDecoration: "none" }}
            >
              Lifting Log
            </Link>
            <Button color="inherit" href="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" href="/lifts">
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
