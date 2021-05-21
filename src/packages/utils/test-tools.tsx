import React, { ReactNode } from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { ConfigContext } from '@/utils/context/config';
import theme from '@/theme';

const config = require('../../orchard.theme.config.json');

const removeProperties = () => {
  const keys = ['theme', 'styledTheme'];
  return {
    test: (val: any) => {
      return (
        val &&
        typeof val === 'object' &&
        'props' in val &&
        Object.keys(val.props).some(prop => keys.some(key => key === prop))
      );
    },
    print: (val: any, serialize: any) => {
      keys.forEach(key => {
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

export const shallowWithTheme = (children: ReactNode) =>
  shallow(<ThemeProvider theme={formattedTheme}>{children}</ThemeProvider>)
    .dive()
    .shallow();

export const mountWithTheme = (children: ReactNode) => {
  expect.addSnapshotSerializer(removeProperties());

  return mount(
    <ConfigContext.Provider value={config}>
      <ThemeProvider theme={formattedTheme}>{children}</ThemeProvider>
    </ConfigContext.Provider>
  );
};
