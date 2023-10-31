import { render, screen } from "@testing-library/react";
import TestComponent from "../../components/TestComponent";

test("On initial render, TestComponent should be displayed", () => {
  render(<TestComponent />);
  expect(screen.getByRole("button", { name: /pay/i })).toBeDisabled();
  screen.debug();
});
