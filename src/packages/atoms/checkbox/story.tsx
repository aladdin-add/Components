import React from 'react';

import Checkbox from './';

export default {
  title: 'Components / Atoms / Checkbox',
  component: Checkbox,
};

export const story = () => {
  return <Checkbox checked />;
};

export const Indeterminate = () => {
  return <Checkbox indeterminate />;
};
