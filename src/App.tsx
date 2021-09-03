import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import NavBar from './components/NavBar';

function App() {
  return (
    <Container>
      <div className='App'>
        <NavBar />
      </div>
    </Container>
  );
}

export default App;
