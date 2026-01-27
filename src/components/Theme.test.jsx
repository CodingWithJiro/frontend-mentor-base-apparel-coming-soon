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
});
