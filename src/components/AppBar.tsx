import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Link variant='h6' color='inherit' className={classes.title} href='/'>
            Lifting Log
            </Link>
          <Button color='inherit' href='/dashboard'>
            Dashboard
          </Button>
          <Button color='inherit' href='/lifts'>Lifts</Button>
        </Toolbar>
      </AppBar>
    </div>

    <Switch>
      <Route path='/dashboard'>
        Dashboard
      </Route>
      <Route path='/lifts'>
        Lifts
      </Route>
      <Route path='/'>
        Home
      </Route>
    </Switch>
    </Router>
    
  );
}
