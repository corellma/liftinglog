import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { Lift, LiftInput } from "../models/lift";
import { DbConnector } from "../models/dbconnector";

export default function InputForm() {
  const dbConnector = new DbConnector();
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  let e1rm = Lift.estimate1rm(weight, reps);
  const { register, handleSubmit } = useForm<LiftInput>();
  const onSubmit: SubmitHandler<LiftInput> = (newLiftData, event) => {
    const newLift = new Lift(newLiftData);
    dbConnector.addToDb(newLift).then(() => {
      event?.target.reset();
    });
  };

  return (
    <form style={{ width: "600px" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          {...register("lift")}
          label="Lift"
          style={{ width: "100%", marginTop: "10px", textAlign: "left" }}
          required
        />
      </div>
      <div>
        <TextField
          {...register("weight", {
            valueAsNumber: true,
          })}
          onChange={(event) => {
            setWeight(parseInt(event.target.value));
            if (reps != 0 && weight != 0) {
              e1rm = Lift.estimate1rm(weight, reps);
            }
          }}
          label="Weight"
          type="number"
          style={{ width: "100%", marginTop: "20px" }}
          inputProps={{
            step: "2.5",
            min: "0",
          }}
          required
        />
      </div>
      <div>
        <TextField
          {...register("reps", {
            valueAsNumber: true,
          })}
          onChange={(event) => {
            setReps(parseInt(event.target.value));
            if (reps != 0 && weight != 0) {
              e1rm = Lift.estimate1rm(weight, reps);
            }
          }}
          label="Repetitions"
          type="number"
          style={{ width: "100%", marginTop: "20px" }}
          inputProps={{
            step: "1.0",
            min: "0",
            max: "20",
          }}
          required
        />
      </div>
      <div>
        <TextField
          disabled
          style={{ width: "100%", marginTop: "20px" }}
          label="Estimated 1 RM"
          value={e1rm != 0 && !isNaN(e1rm) ? e1rm : ""}
        />
      </div>
      <div>
        <TextField
          style={{ width: "100%", marginTop: "20px" }}
          {...register("date")}
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button
        type="submit"
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
  );
}
