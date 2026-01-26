import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";
import { describe } from "vitest";

describe("SubmitButton", () => {
  test("disable button when status is loading", () => {
    render(<SubmitButton status="loading" />);

    const button = screen.getByRole("button", {
      name: /submit email/i,
    });

    expect(button).toBeDisabled();
  });

  test("adds shake animation when shouldShake is true", () => {
    render(<SubmitButton shouldShake={true} />);

    const button = screen.getByRole("button", {
      name: /submit email/i,
    });

    expect(button).toHaveClass("shake");
  });

  test("show error icon when status is error", () => {
    render(<SubmitButton status="error" />);

    const errorIcon = screen.getByRole("img", {
      name: /error/i,
    });

    expect(errorIcon).toBeInTheDocument();
  });
});
