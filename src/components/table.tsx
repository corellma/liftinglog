import React from 'react';
import { makeStyles, Paper, Table, TableContainer } from '@material-ui/core';
import { Lift } from '../models/lift';
import { Header, Body } from './table-elements';

interface TableProps {
  columns: string[];
  lifts: Lift[];
}

const useStyles = makeStyles({
  table: {
    width: '80%',
    height: 'auto',
    marginTop: '40px',
  },
});

export default function LiftTable(props: TableProps) {
  const classes = useStyles();

  if (props.lifts.length > 0) {
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <Header columns={props.columns} />
          <Body pr_lifts={props.lifts} />
        </Table>
      </TableContainer>
    );
  } else {
    return null;
  }
}
