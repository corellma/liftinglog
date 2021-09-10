import { db } from "./db";
import { LiftInput } from "./lift_input";

export class Lift {
  id: number;
  lift: string;
  weight: number;
  reps: number;
  e1RM: number;
  date: Date;

  constructor(submission: LiftInput) {
    this.lift = submission.lift;
    this.weight = submission.weight;
    this.reps = submission.reps;
    this.e1RM = this.estimate_1rm(this.weight, this.reps);
    if (submission.date) this.date = submission.date;
    console.log(this.e1RM);
  }

  private estimate_1rm(weight: number, reps: number): number {
    if (reps === 1) {
      console.log("reps: 1");
      console.log(weight);
      return weight;
    }
    console.log(reps, weight);
    return (1 + reps / 30) * weight;
  }

  public addToDB(): void {
    db.lifts.add(this);
  }
}
