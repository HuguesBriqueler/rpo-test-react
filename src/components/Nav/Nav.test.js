import Nav from "./Nav";
import { render, screen } from "@testing-library/react";

// test presence of all navbar buttons
test("renders all navbar buttons", () => {
  render(<Nav />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(4);
});
