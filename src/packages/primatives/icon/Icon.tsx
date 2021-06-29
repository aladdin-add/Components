import React, { useContext, Suspense, useMemo } from 'react';
import { HelpCircle } from 'react-feather';
import { generateAutomationId } from '@/utils/automation';
import { BoxProps } from '@/primatives/box';
import { ConfigContext } from '@/utils/context/config';

import { getIcon } from './utils';
import { SvgWrapper } from './styled';

export interface Props extends Omit<BoxProps, 'children'> {
  name: string;
}

const Icon = ({ autoid, name, ...rest }: Props) => {
  const config = useContext(ConfigContext);

  const Element = useMemo(() => getIcon(config, name), [config, name]);

  console.log(Element);

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
