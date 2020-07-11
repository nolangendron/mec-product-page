import React from "react";
import { render } from "@testing-library/react";
import { LandingPage } from "./LandingPage";

it("should take a snapshot of App", () => {
  const { asFragment } = render(<LandingPage />);
  expect(asFragment(<LandingPage />)).toMatchSnapshot();
});
