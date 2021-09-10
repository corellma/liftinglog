import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { Lift } from "../models/lift";
import React from "react";

export type NewLiftEntry = {
  lift: string;
  weight: number;
  reps: number;
  date?: Date;
};

function LiftInputForm() {
  const { register, handleSubmit } = useForm<NewLiftEntry>();
  const onSubmit: SubmitHandler<NewLiftEntry> = (new_lift_data, event) => {
    const new_lift = new Lift(new_lift_data);
    new_lift.addToDB();
    event?.target.reset()
  };

  return (
    <form style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          {...register("lift")}
          label="Lift"
          style={{ width: "100%", marginTop: "20px" }}
          required
        />
      </div>
      <div>
        <TextField
          {...register("weight")}
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
          {...register("reps")}
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

export default LiftInputForm;
