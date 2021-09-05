import React, { useState } from "react";
import { Slider, TextField, Typography } from "@material-ui/core";

export default function Lifts() {
  function valuetext(value: number) {
    return `${value}`;
  }

  return (
    <div
      style={{
        background: "#DCDCDC",
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" style={{ paddingTop: "20px" }}>
        Enter a new PR for a Lift
      </Typography>
      <form>
        <div>
          <TextField id="standard-basic" label="Standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Standard" />
        </div>
        <div>
          <Typography id="discrete-slider" gutterBottom>
            Number of Reps:
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={20}
          />
        </div>
        <div>
          <TextField
            id="date"
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </form>
    </div>
  );
}
