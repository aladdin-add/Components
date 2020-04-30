import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Box from "../Box";

describe("<Box />", () => {
  it("renders correctly", () => {
    const wrapper = shallowWithTheme(
      <Box>
        Content
      </Box>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
