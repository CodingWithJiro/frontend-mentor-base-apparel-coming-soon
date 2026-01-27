import { render, screen } from "@testing-library/react";
import InputEmail from "./InputEmail";

const inputRegex = /email address/i;

describe("InputEmail", () => {
  test("adds shake animation when shouldShake is true", () => {
    render(<InputEmail shouldShake={true} />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toHaveClass("shake");
  });

  test("disables input when status is loading", () => {
    render(<InputEmail status="loading" />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toBeDisabled();
  });

  test("updates aria-invalid to true when status is error", () => {
    render(<InputEmail status="error" />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  test("updates aria-describedby to email-error when status is error", () => {
    render(<InputEmail status="error" />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toHaveAttribute("aria-describedby", "email-error");
  });

  test("updates aria-describedby to email-success when status is success", () => {
    render(<InputEmail status="success" />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toHaveAttribute("aria-describedby", "email-success");
  });
});
