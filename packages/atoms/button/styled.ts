import styled from "styled-components";
import { buttonStyle } from "styled-system";
import { variant } from "@aw-web-design/theme";
import Interactable from "@//primatives/interactable";

export const StyledInteractable = styled(Interactable)`
  ${variant({
    prop: "typography",
    scale: "typography.type",
  })}
  ${buttonStyle}
`;
