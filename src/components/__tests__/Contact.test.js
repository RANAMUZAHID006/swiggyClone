import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test(" function load button insid e contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //Assertion
  expect(heading).toBeInTheDocument();

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes.length);
  //Assertion
  expect(inputBoxes.length).toBe(2);
});
