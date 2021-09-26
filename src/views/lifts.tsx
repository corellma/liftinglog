import React from "react";
import { Typography } from "@material-ui/core";
import LiftsTable from "../components/liftstable";
import GreyButton from "../components/button";

export default function AllLifts() {
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
      <LiftsTable />
      <div style={{ width: "100%", height: "100%", paddingTop: "40px" }}>
        <GreyButton
          textOnButton="Track a new Lift"
          href="/submitlift"
          isRouter
        />
      </div>
    </div>
  );
}
