import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { unmountComponentAtNode } from "react-dom";

let container: Element | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

test("app renders navbar", () => {
  render(<App />);
  expect(screen.getByText("Lifting Log")).toBeInTheDocument();
});
