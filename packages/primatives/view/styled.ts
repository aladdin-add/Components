import styled from "styled-components";
import { compose, color, layout, space, position, border, shadow, flexbox, system } from "styled-system";

const utilProps = system({
  visibility: {
    property: "visibility",
  },
  pointerEvents: {
    property: "pointerEvents",
  },
});

const StyledProps = compose(space, color, layout, position, border, shadow, flexbox, utilProps);

export const StyledView = styled.div`
  display: block;
  box-sizing: border-box;
  ${StyledProps}
`;
