import React from "react";

import { StyledText } from "./styled";

export interface Props {
  children: string;
  autoid?: string;
}

const Text = ({ children, autoid }: Props) => <StyledText data-autoid={autoid}>{children}</StyledText>;

export default Text;
