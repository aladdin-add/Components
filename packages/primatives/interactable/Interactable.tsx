import React, { ReactNode } from "react";
import { ViewProps } from "@/view";

export interface Props extends ViewProps {
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
