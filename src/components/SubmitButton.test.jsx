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
});
