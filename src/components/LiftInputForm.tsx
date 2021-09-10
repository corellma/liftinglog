import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { Lift } from "../models/lift";
import { LiftInput } from "../models/lift_input";

function LiftInputForm() {
  const { register, handleSubmit } = useForm<LiftInput>();
  const onSubmit: SubmitHandler<LiftInput> = (new_lift_data, event) => {
    const new_lift = new Lift(new_lift_data);
    new_lift.addToDB();
    event?.target.reset();
  };

  return (
    <form style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputLabel style={{ textAlign: "left", marginTop: "20px" }}>
          Lift
        </InputLabel>
        <Select
          {...register("lift")}
          label="Lift"
          style={{ width: "100%", marginTop: "10px", textAlign: "left" }}
          required
        >
          <MenuItem value="Bench Press">Bench Press</MenuItem>
          <MenuItem value="Deadlift">Deadlift</MenuItem>
        </Select>
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
