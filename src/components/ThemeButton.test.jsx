import { render, screen } from "@testing-library/react";
import ThemeButton from "./ThemeButton";

describe("ThemeButton", () => {
  test("shows correct label and pressed state in light theme", () => {
    render(<ThemeButton theme="light" />);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-label", "Switch to dark theme");
    expect(button).toHaveAttribute("aria-pressed", "false");
  });
});
