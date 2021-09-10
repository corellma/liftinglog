import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";

export default function Lift_Collection() {
  const lifts = useLiveQuery(() => db.lifts.toArray());

  if (!lifts) return null; // Still loading.

  return (
    <ul>
      {lifts.map((lift) => (
        <li key={lift.id}>
          {lift.lift}, {lift.e1RM}
        </li>
      ))}
    </ul>
  );
}
