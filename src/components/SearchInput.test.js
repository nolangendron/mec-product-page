import React from "react";
import { render } from "@testing-library/react";
import { SearchInput } from "../components/SearchInput";

it("should take a snapshot of SearchInput", () => {
  const { asFragment } = render(<SearchInput />);
  expect(asFragment(<SearchInput />)).toMatchSnapshot();
});
