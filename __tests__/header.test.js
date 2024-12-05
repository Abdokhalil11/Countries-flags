import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "@/components/Header";

test("render the title page correctly", () => {
  render(<Header />);

  const headingElement = screen.getByRole("heading", {
    name: /where in the world/i,
  });
  const buttonElement = screen.getByRole("button", { name: /dark mode/i });

  expect(headingElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

// check the dark mode
test("check the dark mode active", async () => {
  render(<Header />);

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent(/dark mode/i);

  await user.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/light mode/i);
});
