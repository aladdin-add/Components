import React, { ReactNode } from "react";
import { ButtonStyleProps } from "styled-system";
import Text from "@//primatives/text";
import { BoxProps } from "@//primatives/box";

import { StyledInteractable } from "./styled";

export interface Props extends BoxProps, ButtonStyleProps {
  children: ReactNode;
  iconName?: string;
  autoid?: string;
}

const Button = ({ children, iconName, autoid = "", ...rest }: Props) => {
  return (
    <StyledInteractable forwardedAs="button" autoid={`${autoid}_button`} typography="button" {...rest}>
      {typeof children === "string" ? <Text>{children}</Text> : { children }}
    </StyledInteractable>
  );
};

export default Button;
