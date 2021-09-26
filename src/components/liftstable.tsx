import React from "react";
import { useEffect, useState } from "react";
import { DbConnector } from "../models/dbconnector";
import { Lift } from "../models/lift";
import {
  Table,
  TableContainer,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Header, Body } from "./tableelements";

const useStyles = makeStyles({
  table: {
    width: "80%",
    height: "auto",
    marginTop: "40px",
  },
});

const tableColumns = ["Exercise", "Weight", "Reps", "Date", "e1RM"];

export default function LiftsTable() {
  const dbConnector = new DbConnector();
  const classes = useStyles();
  const [lifts, setLifts] = useState<Lift[]>([]);

  useEffect(() => {
    fillAllLifts();
  });

  async function fillAllLifts() {
    setLifts((await dbConnector.getAllEntries().sortBy("Date")).reverse());
  }

  if (lifts.length > 0) {
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <Header columns={tableColumns} />
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
