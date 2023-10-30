import { render, screen } from "@testing-library/react";
import App from "./App";
import { http, setupServer, HttpResponse } from "msw/node";

export default setupServer(
  http.get("*/api", () => {
    return new HttpResponse(null, { status: 200 });
  })
);

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
