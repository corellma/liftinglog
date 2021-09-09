import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyDatabase } from "./models/db";
import { Lift } from "./models/lift";

async function test_db() {
  var db = new MyDatabase();
  const lift = new Lift("Bench Press", 120, 5);
  await db.liftinglog.add(lift);
  const result = await db.liftinglog.get(1);
  console.log(result?.e1RM);
}

test_db();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
