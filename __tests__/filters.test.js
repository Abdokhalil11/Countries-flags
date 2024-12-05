import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Filters from "@/components/Filters";

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

test("check all fields render correctly", () => {
  render(<Filters />);

  const selectBoxElement = screen.getByRole("combobox");
  const searchElement = screen.getByRole("textbox");

  expect(searchElement).toBeInTheDocument();
  expect(selectBoxElement).toBeInTheDocument();
});

test("the checkBox function", async () => {
  render(<Filters />);

  const selectBoxElement = screen.getByRole("combobox");

  await user.selectOptions(selectBoxElement, "Africa");
  expect(selectBoxElement).toHaveValue("Africa");

  await user.selectOptions(selectBoxElement, "Asia");
  expect(selectBoxElement).toHaveValue("Asia");
  screen.debug();
});
