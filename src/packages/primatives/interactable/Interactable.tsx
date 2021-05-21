import React from 'react';
import { BoxProps } from '@/primatives/box';
import { generateAutomationId } from '@/utils/automation';

import { StyledInteractable } from './styled';

export interface Props extends BoxProps {
  onClick?: () => void;
}

const Interactable = ({
  className,
  children,
  autoid = '',
  onClick,
  ...rest
}: Props) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledInteractable
      className={className}
      onClick={handleOnClick}
      data-autoid={generateAutomationId(autoid)}
      {...rest}
    >
      {children}
    </StyledInteractable>
  );
};

export default Interactable;
