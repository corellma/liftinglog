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
    if (submission.date) this.date = submission.date;
    this.estimate_1rm();
  }

  private estimate_1rm(): void {
    this.e1RM = this.weight * (1 + this.reps / 40);
  }

  public addToDB(): void {
    db.lifts.add(this);
  }
}
