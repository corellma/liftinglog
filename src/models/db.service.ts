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
}
