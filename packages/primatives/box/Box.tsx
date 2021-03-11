import React, { ReactNode } from "react";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  BorderProps,
  ShadowProps,
  FlexboxProps,
} from "styled-system";

import { StyledBox } from "./styled";

export interface Props
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    PositionProps,
    BorderProps,
    ShadowProps,
    FlexboxProps {
  children: ReactNode;
  as?: any;
  autoid?: string;
  className?: string;
}

const Box = ({ children, as, autoid, ...rest }: Props) => (
  <StyledBox data-autoid={autoid} as={as} {...rest}>
    {children}
  </StyledBox>
);

export default Box;
