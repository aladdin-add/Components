import React from "react";
import { BoxProps } from "@//primatives/box";

import { StyledInteractable } from "./styled";

export interface Props extends BoxProps {
  onClick?: () => void;
}

const Interactable = ({ children, onClick, ...rest }: Props) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledInteractable onClick={handleOnClick} {...rest}>
      {children}
    </StyledInteractable>
  );
};

export default Interactable;
