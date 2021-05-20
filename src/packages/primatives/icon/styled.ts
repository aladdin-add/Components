import styled from "styled-components";
import { IntentVariants } from "@aw-web-design/theme";
import { StyledBoxProps } from "@/primatives/box";

export const SVG = (Element) => styled(Element)`
  fill: currentColor;

  ${IntentVariants}
  ${StyledBoxProps}
`;
