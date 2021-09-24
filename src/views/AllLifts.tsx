import React from "react";
import { Typography } from "@material-ui/core";
import { AllLiftsTable } from "../components/AllLiftsTable";
import GreyButton from "../components/Button";

export default function All_Lifts() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginLeft: "300px",
        marginRight: "300px",
      }}
    >
      <Typography variant="h6" style={{ paddingTop: "40px", width: "300px" }}>
        Your Lifting History
      </Typography>
      <AllLiftsTable />
      <div style={{ width: "100%", height: "100%", paddingTop: "40px" }}>
        <GreyButton textOnButton="Track a new Lift" href="/submitlift" isRouter />
      </div>
    </div>
  );
}
