import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@material-ui/core";
import Menu from "./menu";

export default function NavBar() {
  return (
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
          <Menu />
          <Button color="inherit" component={RouterLink} to="/submitlift">
            New Lift
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
