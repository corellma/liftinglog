import { Container } from "@material-ui/core";
import React from "react";
import "./App.css";
import SimpleTabs from "./components/AppBar";

function App() {
  return (
    <Container>
      <div className='App'>
        <SimpleTabs />
      </div>
    </Container>
  );
}

export default App;
