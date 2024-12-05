import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBar from "@/components/SearchBar";

test("render the searchBar Correctly", () => {
  render(<SearchBar searchHandling={jest.fn()} />);
  const searchBarElement = screen.getByRole("textbox");
  expect(searchBarElement).toBeInTheDocument();
});

test("check the function of searchBar", async () => {
  render(<SearchBar searchHandling={jest.fn()} />);
  const searchBarElement = screen.getByRole("textbox");
  await user.type(searchBarElement, "egypt");
  expect(searchBarElement).toHaveValue("egypt");
});
