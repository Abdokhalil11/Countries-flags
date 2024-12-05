import { http, HttpResponse } from "msw";

const handlers = [
  http.get("https://restCountries.com/v2/all", () => {
    return HttpResponse.json([
      {
        flags: {
          svg: "https://placehold.co/600x400/black/white?text=Egypt",
        },
        population: "1000",
        name: "Egypt",
        region: "Africa",
        capital: "Cairo",
      },
    ]);
  }),
];

module.exports = handlers;
