export type LiftInput = {
  lift: string;
  weight: number;
  reps: number;
  date?: Date;
};

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
  }

  private estimate_1rm(weight: number, reps: number): number {
    if (reps === 1) {
      return weight;
    }
    return Math.round((1 + reps / 30) * weight);
  }
}
