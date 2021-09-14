import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { Lift, LiftInput } from "../models/lift";
import { DB_Service } from "../models/db.service";

function LiftInputForm() {
  const db_service = new DB_Service();
  const { register, handleSubmit } = useForm<LiftInput>();
  const onSubmit: SubmitHandler<LiftInput> = (new_lift_data, event) => {
    const new_lift = new Lift(new_lift_data);
    db_service.add_to_db(new_lift).then(() => {
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
