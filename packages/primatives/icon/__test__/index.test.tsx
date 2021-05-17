import React from "react";
import toJson from "enzyme-to-json";
import { shallowWithTheme } from "@//test-tools";

import Icon from "..";

describe("<Icon />", () => {
  it("renders correctly", () => {
    const wrapper = shallowWithTheme(<Icon name="test" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
