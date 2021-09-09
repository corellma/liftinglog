import { MyDatabase } from "./db";

export class Lift {
  lift: string;
  weight: number;
  reps: number;
  e1RM: number;
  date: string;

  constructor(lift: string, weight: number, reps: number, date?: string) {
    this.lift = lift;
    this.weight = weight;
    this.reps = reps;
    if (date) this.date = date;
    this.estimate_1rm();
  }

  private estimate_1rm(): void {
    this.e1RM = this.weight * (1 + this.reps / 40);
  }

  public addToDB(): void {
    var db = new MyDatabase();
    db.liftinglog.add(this);
    window.location.reload();
  }
}
