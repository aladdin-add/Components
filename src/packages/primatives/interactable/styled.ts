import styled from 'styled-components';
import { Box, StyledBoxProps } from '@/primatives';
import { shouldForwardProp } from '@/utils';

export const StyledInteractable = styled(Box).withConfig({
  shouldForwardProp: shouldForwardProp(
    StyledBoxProps.propNames
  ) as () => boolean,
})``;
