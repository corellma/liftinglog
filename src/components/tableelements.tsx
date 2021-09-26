import React from "react";
import { TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { Lift } from "../models/lift";

interface HeaderProps {
  columns: string[];
}

interface BodyProps {
  pr_lifts: Lift[];
}

export function Header(props: HeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {props.columns.map((column) => {
          return (
            <TableCell key={props.columns.indexOf(column)}>{column}</TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export function Body(props: BodyProps) {
  return (
    <TableBody>
      {props.pr_lifts.map((prLift) => {
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
  );
}
