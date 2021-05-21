import React, { useContext, Suspense } from 'react';
import { HelpCircle } from 'react-feather';
import { generateAutomationId } from '@/utils/automation';
import { BoxProps } from '@/primatives/box';
import { ConfigContext } from '@/utils/context/config';

import { getIcon } from './utils';
import { SVG } from './styled';

export interface Props extends Omit<BoxProps, 'children'> {
  name: string;
}

const Icon = ({ autoid, name, ...rest }: Props) => {
  const config = useContext(ConfigContext);

  const SvgElement = SVG(getIcon(config, name));

  return (
    <Suspense fallback={<HelpCircle />}>
      <SvgElement
        data-autoid={`${generateAutomationId(autoid ?? name)}_icon`}
        {...rest}
      />
    </Suspense>
  );
};

export default Icon;
