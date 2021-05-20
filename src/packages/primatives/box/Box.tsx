import React, { ReactNode } from "react";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  BorderProps,
  ShadowProps,
  FlexboxProps,
} from "@aw-web-design/styled-system";
import { generateAutomationId } from "@/utils/automation";

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
  <StyledBox data-autoid={generateAutomationId(autoid ?? "")} as={as} {...rest}>
    {children}
  </StyledBox>
);

export default Box;
