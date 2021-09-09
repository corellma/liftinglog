export class Lift {
  lift: string;
  weight: number;
  reps: number;
  e1RM: number;
  date: string;

  constructor(lift: string, weight: number, reps: number, date?: string) {
    this.lift = lift;
    this.weight = weight;
    this.reps = reps
    if (date) this.date = date;
    this.estimate_1rm()
  }

  estimate_1rm(): void {
    this.e1RM = (this.weight * (30 + this.reps)/30)
  }
}
