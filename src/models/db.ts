import Dexie from "dexie";
import { Lift } from "./lift";

export class MyDatabase extends Dexie {
  liftinglog: Dexie.Table<Lift, number>;

  constructor() {
    super("db");
    this.version(1).stores({
      liftinglog: "++id,lift,weight,reps,e1rm,date",
    });
    this.liftinglog = this.table("liftinglog");
    this.liftinglog.mapToClass(Lift);
  }
}
