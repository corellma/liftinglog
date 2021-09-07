import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Container disableGutters maxWidth="sm">
        <NavBar />
      </Container>
    </div>
  );
}

export default App;
