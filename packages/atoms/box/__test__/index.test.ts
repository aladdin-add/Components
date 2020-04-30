import React from "react";
import toJson from "enzyme-to-json";

import { shallowWithTheme } from "@/test-tools";

import Box from "../Box";

describe("<Box />", () => {
  it("renders correctly", () => {
    const wrapper = shallowWithTheme(
      <Box>
        content
      </Box>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
