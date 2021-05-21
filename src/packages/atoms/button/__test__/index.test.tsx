import React from 'react';
import toJson from 'enzyme-to-json';
import { mountWithTheme } from '@/utils/test-tools';

import Button from '..';

describe('<Button />', () => {
  it('renders default correctly', () => {
    const wrapper = mountWithTheme(<Button>Default</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders primary correctly', () => {
    const wrapper = mountWithTheme(<Button variant="primary">Primary</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders secondary correctly', () => {
    const wrapper = mountWithTheme(
      <Button variant="secondary">Secondary</Button>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
