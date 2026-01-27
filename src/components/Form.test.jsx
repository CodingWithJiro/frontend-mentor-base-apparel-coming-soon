import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("shows error message when submitting an invalid email", async () => {
    const user = userEvent.setup();

    render(<Form />);

    const input = screen.getByLabelText(/email address/i);

    await user.type(input, "some-invalid-email.com{Enter}");

    const errorMessage = await screen.findByText(
      /please provide a valid email/i,
    );

    expect(errorMessage).toBeInTheDocument();
  });

  test("shows loading message when submitting a valid email", async () => {
    const user = userEvent.setup();

    render(<Form />);

    const input = screen.getByLabelText(/email address/i);

    await user.type(input, "correct@email.com{Enter}");

    const loadingMessage = await screen.findByText(/sending/i);

    expect(loadingMessage).toBeInTheDocument();
  });

  test("shows success message when submitting a valid email", async () => {
    const user = userEvent.setup();

    render(<Form />);

    const input = screen.getByLabelText(/email address/i);

    await user.type(input, "correct@email.com{Enter}");

    const successMessage = await screen.findByText(
      /email success/i,
      {},
      { timeout: 3000 },
    );

    expect(successMessage).toBeInTheDocument();
  });

  test("shows duplicate error message when submitting a duplicate email", async () => {
    const user = userEvent.setup();

    localStorage.setItem("emails", JSON.stringify(["duplicate@email.com"]));

    render(<Form />);

    const input = screen.getByLabelText(/email address/i);

    await user.type(input, "duplicate@email.com{Enter}");

    const duplicateMessage = screen.getByText(/email already sent/i);

    expect(duplicateMessage).toBeInTheDocument();
  });

  test("updates input border and outline to red when typing an invalid email and then tabbing out", async () => {
    const user = userEvent.setup();

    render(<Form />);

    const input = screen.getByLabelText(/email address/i);

    await user.type(input, "unfinished.email");
    await user.tab();

    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  test("clears error state when user focuses back on input", async () => {
    const user = userEvent.setup();

    render(<Form />);

    const input = screen.getByLabelText(/email address/i);

    await user.type(input, "incorrect@email{Enter}");

    const errorMessage = await screen.findByText(
      /please provide a valid email/i,
    );

    expect(errorMessage).toBeInTheDocument();

    await user.click(input);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
