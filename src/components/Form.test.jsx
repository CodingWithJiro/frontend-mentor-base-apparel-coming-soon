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
});
