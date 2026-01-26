import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders invalid error text", () => {
    render(<ErrorMessage error="invalid" />);
    const message = screen.getByText("Please provide a valid email");
    expect(message).toBeInTheDocument();
  });

  test("renders duplicate error text", () => {
    render(<ErrorMessage error="duplicate" />);
    const message = screen.getByText("Email already sent!");
    expect(message).toBeInTheDocument();
  });
});
