import React, { ReactNode } from "react";
import { 
  SpaceProps, 
  ColorProps, 
  LayoutProps, 
  PositionProps, 
  BorderProps,
  ShadowProps,
  FlexboxProps
} from "styled-system";

import { StyledView } from "./styled";

export interface Props extends 
  SpaceProps, 
  ColorProps, 
  LayoutProps, 
  PositionProps,
  BorderProps,
  ShadowProps,
  FlexboxProps
{
  children: ReactNode;
  as?: any;
  autoid: string;
}

const View = ({ children, as, autoid }: Props) => (
  <StyledView data-autoid={autoid} as={as}>
    {children}
  </StyledView>
);

export default View;
