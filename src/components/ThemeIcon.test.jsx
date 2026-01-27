import { render, screen } from "@testing-library/react";
import ThemeIcon from "./ThemeIcon";

describe("ThemeIcon", () => {
  test("toggles to theme icon dark and hides theme icon light on dark theme", () => {
    render(<ThemeIcon theme="dark" />);

    const themeIconDark = screen.getByTestId("theme-icon-dark");
    const themeIconLight = screen.queryByTestId("theme-icon-light");

    expect(themeIconDark).toBeInTheDocument();
    expect(themeIconLight).not.toBeInTheDocument();
  });
});
