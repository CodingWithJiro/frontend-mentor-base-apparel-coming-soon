import { render } from "@testing-library/react";
import Theme from "./Theme";

describe("Theme", () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  test("loads saved theme from localStorage", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      media: query,
      matches: false,
    }));

    localStorage.setItem("theme", "dark");

    render(<Theme />);

    const root = document.documentElement;

    expect(root).toHaveClass("dark");
  });

  test("loads prefers media theme if there is no saved theme from localStorage", () => {
    window.matchMedia = vi.fn().mockReturnValue({
      media: "(prefers-color-scheme: dark)",
      matches: true,
    });

    render(<Theme />);

    const root = document.documentElement;

    expect(root).toHaveClass("dark");
  });
});
