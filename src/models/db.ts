import Dexie from "dexie";
import { Lift } from "./lift";

class LiftingLog extends Dexie {
  lifts: Dexie.Table<Lift, number>;

  constructor() {
    super("db");
    this.version(1).stores({
      lifts: "++id,lift,weight,reps,e1rm,date",
    });
    this.lifts = this.table("lifts");
  }
}

export const db = new LiftingLog();