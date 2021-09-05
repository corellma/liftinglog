import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App" style={{ width: "100%", left: 0 }}>
      <Container disableGutters maxWidth="xl">
        <NavBar />
      </Container>
    </div>
  );
}

export default App;
