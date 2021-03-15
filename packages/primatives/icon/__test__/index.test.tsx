import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Icon from "..";

describe("<Icon />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Icon name="test" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
