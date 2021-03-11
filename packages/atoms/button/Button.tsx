import React, { ReactNode } from "react";
import { ButtonStyleProps } from "styled-system";
import Text from "@//primatives/text";
import { InteractableProps } from "@/primatives/interactable";

import { StyledInteractable } from "./styled";

export interface Props extends InteractableProps, ButtonStyleProps {
  children: ReactNode;
  iconName?: string;
  autoid?: string;
}

const Button = ({ className, children, iconName, autoid = "", ...rest }: Props) => {
  return (
    <StyledInteractable className={className} forwardedAs="button" autoid={`${autoid}_button`} typography="button" {...rest}>
      {typeof children === "string" ? <Text>{children}</Text> : { children }}
    </StyledInteractable>
  );
};

export default Button;
