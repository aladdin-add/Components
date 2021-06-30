import React, { useContext, Suspense, useMemo } from 'react';
import { HelpCircle, Minus } from 'react-feather';
import { generateAutomationId, ConfigContext } from '@/utils';
import { BoxProps } from '@/primatives';

import { getIcon } from './utils';
import { SvgWrapper } from './styled';

export interface Props extends Omit<BoxProps, 'children'> {
  name: string;
}

const Icon = ({ autoid, name, ...rest }: Props) => {
  const config = useContext(ConfigContext);

  const Element = Minus;

  return (
    <Suspense fallback={<HelpCircle />}>
      <SvgWrapper
        autoid={`${generateAutomationId(autoid ?? name)}_icon`}
        {...rest}
      >
        <Element />
      </SvgWrapper>
    </Suspense>
  );
};

export default Icon;
