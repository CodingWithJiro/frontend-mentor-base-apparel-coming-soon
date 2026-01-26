import { render, screen } from "@testing-library/react";
import InputEmail from "./InputEmail";

const inputRegex = /email address/i;

describe("InputEmail", () => {
  test("adds shake animation when shouldShake is true", () => {
    render(<InputEmail shouldShake={true} />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toHaveClass("shake");
  });

  test("disable input element when status is loading", () => {
    render(<InputEmail status="loading" />);

    const input = screen.getByLabelText(inputRegex);

    expect(input).toBeDisabled();
  });
});
