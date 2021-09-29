import React from 'react';
import { BoxProps } from '@/primatives';
import { generateAutomationId } from '@/utils';

import { StyledInteractable } from './styled';

export interface Props extends BoxProps {
  onClick?: (event: MouseEvent) => void;
}

const Interactable = ({
  className,
  children,
  autoid = '',
  onClick,
  ...rest
}: Props) => {
  const handleOnClick = (event: MouseEvent) => {
    if (onClick) {
      onClick(event);
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
