import styled from 'styled-components';
import { IntentVariants } from '@aw-web-design/styled-system';
import Box, { StyledBoxProps } from '@/primatives/box';

export const SvgWrapper = styled(Box)`
  svg {
    fill: currentColor;

    ${IntentVariants}
    ${StyledBoxProps}
  }
`;
