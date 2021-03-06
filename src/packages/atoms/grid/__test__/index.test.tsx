import React from 'react';
import toJson from 'enzyme-to-json';
import { mountWithTheme } from '@/utils';

import Grid, { Cell } from '..';

describe('<Grid />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <Grid columns={['auto', '1fr 1fr', '1fr 1fr 2fr']}>
        <Cell>Cell 1</Cell>
        <Cell>Cell 2</Cell>
        <Cell>Cell 3</Cell>
        <Cell>Cell 4</Cell>
        <Cell>Cell 5</Cell>
      </Grid>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
