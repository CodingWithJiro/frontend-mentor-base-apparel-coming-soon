import { render, screen } from "@testing-library/react";
import InputEmail from "./InputEmail";

describe("InputEmail", () => {
  test("adds shake animation when shouldShake is true", () => {
    render(<InputEmail shouldShake={true} />);

    const input = screen.getByLabelText(/email address/i);

    expect(input).toHaveClass("shake");
  });
});
