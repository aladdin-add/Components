import React from 'react';
import { InteractableProps } from '@/primatives/interactable';
import Text from '@/primatives/text';

import { StyledInteractable } from './styled';

export interface Props extends InteractableProps {
  iconName?: string;
  variant?: string;
}

const Button = ({
  className,
  children,
  iconName,
  autoid = '',
  variant = 'default',
  ...rest
}: Props) => {
  return (
    <StyledInteractable
      className={className}
      forwardedAs="button"
      autoid={`${autoid || children}_button`}
      typography="button"
      variant={variant}
      {...rest}
    >
      {typeof children === 'string' ? <Text>{children}</Text> : { children }}
    </StyledInteractable>
  );
};

export default Button;
