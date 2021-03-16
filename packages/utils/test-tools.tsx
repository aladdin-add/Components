import React from "react";
import { mount, shallow } from "enzyme";
import { ThemeProvider } from "styled-components";
import { ConfigContext } from "@//utils/context/config";
import theme from "@//theme";
import config from "../../orchard.theme.config.json";

const removeProperties = () => {
  const keys = ["theme", "styledTheme"];
  return {
    test: (val) => {
      return (
        val &&
        typeof val === "object" &&
        "props" in val &&
        Object.keys(val.props).some((prop) => keys.some((key) => key === prop))
      );
    },
    print: (val, serialize) => {
      keys.forEach((key) => {
        delete val.props[key];
      });
      return serialize(val);
    },
  };
};

const formattedTheme = {
  ...theme,
  colors: {
    common: theme.colors.common,
    modes: theme.colors.modes,
    ...theme.colors.modes.light,
  },
};

export const shallowWithTheme = (children) =>
  shallow(
    <ConfigContext.Provider value={config}>
      <ThemeProvider theme={formattedTheme}>
        {children}
      </ThemeProvider>
    </ConfigContext.Provider>
  )
    .dive()
    .dive()
    .shallow();

export const mountWithTheme = (children) => {
  expect.addSnapshotSerializer(removeProperties());

  return mount(
    <ConfigContext.Provider value={config}>
      <ThemeProvider theme={formattedTheme}>
        {children}
      </ThemeProvider>
    </ConfigContext.Provider>
  );
};
