import styled from "styled-components";
import { compose, color, layout, space, position, border, shadow, flexbox, system } from "styled-system";

const utilProps = system({
  visibility: {
    property: "visibility",
  },
  pointerEvents: {
    property: "pointerEvents",
  }
});

const StyledView = styled.div`
  display: block;
  box-sizing: border-box;
  ${compose(space, color, layout, position, border, shadow, flexbox, utilProps)}
`;

export default StyledView;
