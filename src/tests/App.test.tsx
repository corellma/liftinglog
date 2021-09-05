import App from "../App";
import { render } from "@testing-library/react";

test("renders home view on start", () => {
  const { getByText } = render(<App />);
  getByText("PR Sheet");
});
