import React, { ReactNode } from "react";

export interface Props {
  children: ReactNode
  autoid?: string;
  onClick?: () => void;
}

const Interactable = ({ children, onClick, ...rest }: Props) => {
  
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <StyledView {...rest} onClick={handleOnClick}>
      {children}
    </StyledView>
  );
}

export default Interactable;
