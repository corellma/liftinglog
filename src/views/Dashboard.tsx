import { Typography } from "@material-ui/core";
import GreyButton from "../components/Button";
import Lift_Collection from "../components/PR_Table";

export default function Dashboard() {
  return (
    <div
      style={{
        background: "#DCDCDC",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" style={{ paddingTop: "20px", width: "300px" }}>
        Your best PRs by Lift
      </Typography>
      < Lift_Collection />
      <div style={{ width: "100%", height: "100%", paddingTop: "30px" }}>
        <GreyButton textOnButton="Track a new Lift" href="/lifts" />
      </div>
    </div>
  );
}
