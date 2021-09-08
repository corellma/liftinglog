import React,  { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

export default function Lifts() {
  const [lift, setLift] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event: React.SyntheticEvent) {
    console.log("hi");
  }

  return (
    <div
      style={{
        background: "#DCDCDC",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" style={{ paddingTop: "20px", width: "300px" }}>
        Enter a new PR for a Lift
      </Typography>
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        <div>
          <TextField
            name="lift"
            label="Lift"
            style={{ width: "100%", marginTop: "20px" }}
            onChange={(e) => setLift(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField
            id="weight"
            label="Weight"
            type="number"
            style={{ width: "100%", marginTop: "20px" }}
            inputProps={{
              minLength: 0,
              step: "2.5",
            }}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField
            id="reps"
            label="Repetitions"
            type="number"
            style={{ width: "100%", marginTop: "20px" }}
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </div>

        <div>
          <TextField
            style={{ width: "100%", marginTop: "20px" }}
            id="date"
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#282c34",
            width: "100%",
            marginTop: "40px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
