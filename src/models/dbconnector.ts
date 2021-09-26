import { Collection } from "dexie";
import { LiftingLog } from "./db";
import { Lift } from "./lift";

export class DbConnector {
  db: LiftingLog;

  constructor() {
    this.db = new LiftingLog();
  }

  addToDb(lift: Lift): Promise<number> {
    return this.db.lifts.add(lift);
  }

  getAllEntries(): Collection<Lift, number> {
    return this.db.lifts.where("lift").notEqual("");
  }

  getAllExercises(): Promise<any[]> {
    return this.db.lifts.orderBy("lift").uniqueKeys();
  }

  async getPrLifts(): Promise<Lift[]> {
    const allEntries = await this.getAllEntries().toArray();
    const uniqueExercises = await this.getAllExercises();
    const prLifts = uniqueExercises
      .map((unique_exercise) => {
        const found_lifts = allEntries.filter((entry) => {
          return entry.lift === unique_exercise;
        });
        const highestE1RM = Math.max(
          ...found_lifts.map((lift) => {
            return lift.e1RM;
          })
        );
        return found_lifts.find((lift) => lift.e1RM === highestE1RM);
      })
      .filter((lift) => typeof lift !== "undefined") as Lift[];
    return prLifts;
  }
}
