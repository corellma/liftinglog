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

export function PrTable() {
  const db_service = new DB_Service();
  const classes = useStyles();
  const [prLifts, setPrLifts] = useState<Lift[]>([]);

  useEffect(() => {
    fill_pr_lifts();
  });

  async function fill_pr_lifts() {
    const pr_lifts = await db_service.get_prLifts();
    setPrLifts(pr_lifts);
  }

  if (prLifts.length > 0) {
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <Header columns={table_columns} />
          <Body pr_lifts={prLifts} />
        </Table>
      </TableContainer>
    );
  } else {
    return (
      <Typography
        variant="subtitle1"
        style={{ paddingTop: "20px", width: "300px" }}
      >
        ... must be tracked first.
      </Typography>
    );
  }
}
