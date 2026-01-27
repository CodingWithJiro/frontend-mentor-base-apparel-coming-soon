import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form", () => {
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
});
