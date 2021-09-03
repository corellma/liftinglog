import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div className='NavBar' style={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <Link variant='h6' color='inherit' href='/' style={{ flexGrow: 1, textDecoration: 'none' }}>
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
