import { Typography } from "@material-ui/core";
import GreyButton from "../components/Button";

export default function Home() {
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
      <Typography variant="h4" style={{ paddingTop: "40px" }}>
        PR Sheet
      </Typography>
      <Typography variant="h6" style={{ paddingTop: "20px" }}>
        Track your personal records.
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          paddingTop: "20px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        Do you even track, bro? As a serious lifter, you should keep track of
        your lifting bro-gress. Not only will it motivate you to see those PRs
        increasing as you get stronger, it will also help you determine if your
        current program works. If you are tired of dealing with spreadsheets,
        try this neat little web app to track your PRs. All data is saved
        locally in your browser.
      </Typography>
      <div style={{ width: "100%", height: "100%", paddingTop: "30px" }}>
        <GreyButton textOnButton="Track a Lift" href="/lifts" marginRight />
        <GreyButton textOnButton="Visit your Dashboard" href="/dashboard" />
      </div>
    </div>
  );
}
