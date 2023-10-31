import { render, screen } from "@testing-library/react";
import TestComponent from "../../components/TestComponent";

test("On initial render, TestComponent should be displayed", () => {
  render(<TestComponent />);
  screen.debug();
});
