import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("toggles theme to dark on button click", async () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      media: query,
      matches: false,
    }));

    const user = userEvent.setup();

    render(<Theme />);

    const root = document.documentElement;
    const button = screen.getByRole("button");

    expect(root).not.toHaveClass("dark");

    await user.click(button);

    expect(root).toHaveClass("dark");
  });

  test("toggles theme to light on button click", async () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      media: query,
      matches: false,
    }));

    localStorage.setItem("theme", "dark");
    const user = userEvent.setup();

    render(<Theme />);

    const root = document.documentElement;
    const button = screen.getByRole("button");

    expect(root).toHaveClass("dark");

    await user.click(button);

    expect(root).not.toHaveClass("dark");
  });
});
