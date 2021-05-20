import React from "react";

import Button from ".";

export default {
  title: "Components | Atoms / Button",
  component: Button,
};

export const Default = () => <Button>Default Button</Button>;

export const Primary = () => <Button variant="primary">Primary Button</Button>;

export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
