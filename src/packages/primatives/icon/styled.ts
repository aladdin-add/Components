import styled from 'styled-components';
import { IntentVariants } from "@aw-web-design/styled-system";
import { StyledBoxProps } from '@/primatives/box';

export const SVG = (Element: any) => styled(Element)`
  fill: currentColor;

  ${IntentVariants}
  ${StyledBoxProps}
`;
