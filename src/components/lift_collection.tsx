import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../models/db";
import { Lift } from "../models/lift";

export default function Lift_Collection() {
  const unique_lifts = useLiveQuery(() =>
    db.lifts.orderBy("lift").uniqueKeys()
  );
  console.log(unique_lifts);

  // For each unique lift, get all related db entries
  
  return null;

  /*   if (!lifts) return null; // Still loading.
  return (
    <ul>
      {lifts.map((lift) => (
        <li key={lift.id}>
          {lift.lift}, {lift.e1RM}
        </li>
      ))}
    </ul>
  ); */
}
