import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";

type FormValues = {
  lift: string;
  weight: number;
  reps: number;
  date: string;
};

function LiftInputForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

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
            minLength: 0,
            step: "2.5",
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
