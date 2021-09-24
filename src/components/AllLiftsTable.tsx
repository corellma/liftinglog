import React from "react";
import { useEffect, useState } from "react";
import { DB_Service } from "../models/db.service";
import { Lift } from "../models/lift";
import {
  Table,
  TableContainer,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Header, Body } from "./TableElements";

const useStyles = makeStyles({
  table: {
    width: "80%",
    height: "auto",
    marginTop: "40px",
  },
});

const table_columns = ["Exercise", "Weight", "Reps", "Date", "e1RM"];

export function AllLiftsTable() {
  const db_service = new DB_Service();
  const classes = useStyles();
  const [lifts, setLifts] = useState<Lift[]>([]);

  useEffect(() => {
    fill_all_lifts();
  });

  async function fill_all_lifts() {
    setLifts((await db_service.get_all_entries().sortBy("Date")).reverse());
  }

  if (lifts.length > 0) {
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <Header columns={table_columns} />
          <Body pr_lifts={lifts} />
        </Table>
      </TableContainer>
    );
  } else {
    return (
      <Typography
        variant="subtitle1"
        style={{ paddingTop: "20px", width: "300px" }}
      >
        ... is empty.
      </Typography>
    );
  }
}
