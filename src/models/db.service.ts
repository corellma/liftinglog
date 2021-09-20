import { Collection } from "dexie";
import { LiftingLog } from "./db";
import { Lift } from "./lift";

export class DB_Service {
  db: LiftingLog;

  constructor() {
    this.db = new LiftingLog();
  }

  add_to_db(lift: Lift): Promise<number> {
    return this.db.lifts.add(lift);
  }

  get_all_entries(): Collection<Lift, number> {
    return this.db.lifts.where("lift").notEqual("");
  }

  get_all_exercises(): Promise<any[]> {
    return this.db.lifts.orderBy("lift").uniqueKeys();
  }

  async get_prLifts(): Promise<Lift[]> {
    const all_entries = await this.get_all_entries().toArray();
    const unique_exercises = await this.get_all_exercises();
    const pr_lifts = unique_exercises
      .map((unique_exercise) => {
        const found_lifts = all_entries.filter((entry) => {
          return entry.lift === unique_exercise;
        });
        const highest_e1rm = Math.max(
          ...found_lifts.map((lift) => {
            return lift.e1RM;
          })
        );
        return found_lifts.find((lift) => lift.e1RM === highest_e1rm);
      })
      .filter((lift) => typeof lift !== "undefined") as Lift[];
    return pr_lifts;
  }
}
