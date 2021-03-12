import React, { ReactNode, useContext } from "react";
import { InteractableProps } from "@/primatives/interactable";
import Text from "@//primatives/text";

import { StyledInteractable } from "./styled";

export interface Props extends InteractableProps {
  children: ReactNode;
  iconName?: string;
  autoid?: string;
  variant?: string;
}

const Button = ({ className, children, iconName, autoid = "", ...rest }: Props) => {
  return (
    <StyledInteractable
      className={className}
      forwardedAs="button"
      autoid={`${autoid}_button`}
      typography="button"
      {...rest}
    >
      {typeof children === "string" ? <Text>{children}</Text> : { children }}
    </StyledInteractable>
  );
};

export default Button;
