import { useEffect, useState } from "react";
import { DB_Service } from "../models/db.service";
import { Lift } from "../models/lift";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "80%",
    height: "auto",
    marginTop: "40px",
  },
});

export function PrTable() {
  const classes = useStyles();
  const [prLifts, setPrLifts] = useState<Lift[]>([]);

  useEffect(() => {
    get_prLifts();
  });

  async function get_prLifts() {
    const db_service = new DB_Service();
    const all_entries = await db_service.get_all_entries().toArray();
    const unique_exercises = await db_service.get_all_exercises();
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
    setPrLifts(pr_lifts);
  }

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Reps</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>e1RM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prLifts.map((prLift) => {
            return (
              <TableRow key={prLift.id}>
                <TableCell>{prLift.lift}</TableCell>
                <TableCell>{prLift.weight}</TableCell>
                <TableCell>{prLift.reps}</TableCell>
                <TableCell>{prLift.date}</TableCell>
                <TableCell>{prLift.e1RM}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
