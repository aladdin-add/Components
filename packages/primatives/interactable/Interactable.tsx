import React, { ReactNode } from "react";
import { Props as BoxProps } from "@/Box";

import { StyledInteractable } from "./styled";

export interface Props extends BoxProps {
  onClick?: () => void;
}

const Interactable = ({ children, onClick, ...rest }: Props) => {
  
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <StyledInteractable {...rest} onClick={handleOnClick}>
      {children}
    </StyledInteractable>
  );
}

export default Interactable;
