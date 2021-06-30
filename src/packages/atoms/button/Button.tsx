import React from 'react';
import { InteractableProps, Text, Icon } from '@/primatives';

import { StyledInteractable, iconOrientations } from './styled';

export interface Props extends InteractableProps {
  iconName?: string;
  iconPosition?: 'left' | 'top' | 'right' | 'bottom';
  variant?: string;
}

const Button = ({
  className,
  children,
  iconName,
  iconPosition = 'left',
  autoid,
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
      {...iconOrientations[iconPosition]}
      {...rest}
    >
      {iconName && <Icon name={iconName} />}
      {typeof children === 'string' ? <Text>{children}</Text> : { children }}
    </StyledInteractable>
  );
};

export default Button;
