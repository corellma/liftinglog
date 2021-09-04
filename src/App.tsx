import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}

export default App;
