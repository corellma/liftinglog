import { DB_Service } from "../models/db.service";
import { Lift } from "../models/lift";

interface PrTableProps {
  lifts: Lift[];
}

export function PrTableLoader() {
  // hooks
}

export function PrTable(props: PrTableProps) {
  return (
    <table>
      <tr>
        <th>Exercise</th>
        <th>Weight</th>
        <th>Reps</th>
        <th>Date</th>
        <th>e1RM</th>
      </tr>
      {props.lifts.map((lift) => {
        return (
          <tr key={lift.id}>
            <td>{lift.lift}</td>
            <td>{lift.weight}</td>
            <td>{lift.reps}</td>
            <td>{lift.date}</td>
            <td>{lift.e1RM}</td>
          </tr>
        );
      })}
    </table>
  );
}

async function get_dashboard_data(): Promise<Lift[]> {
  const db_service = new DB_Service();
  const all_entries = await db_service.get_all_entries().toArray();
  const unique_exercises = await db_service.get_all_exercises();
  return unique_exercises
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
}
