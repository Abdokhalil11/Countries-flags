import { screen, render } from "@testing-library/react";
import Countries from "@/components/Countries";

jest.mock("next/navigation", () => {
  return {
    useSearchParams() {
      return {
        get: jest.fn(),
      };
    },
  };
});

test("the component render correctly", () => {
  const countries = [
    {
      flags: {
        svg: "https://placehold.co/600x400/black/white?text=Egypt",
      },
      name: "Egypt",
      population: 100000,
      region: "Africa",
      capital: "Cairo",
    },
  ];

  render(<Countries countries={countries} />);
  const linkElement = screen.getByRole("link");
  const imageElement = screen.getByRole("img", {
    name: `${countries[0].name} flag`,
  });
  const nameCountry = screen.getByRole("heading", { level: 3 });
  const elements = [linkElement, imageElement, nameCountry];

  for (const element of elements) {
    expect(element).toBeInTheDocument();
  }
});
