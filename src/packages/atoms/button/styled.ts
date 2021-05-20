import styled, { css } from "styled-components";
import { variant } from "@aw-web-design/theme";
import Interactable from "@/primatives/interactable";

export const ButtonVariants = (theme) =>
  variant({
    prop: "variant",
    variants: theme.variants.buttons(theme),
  });

export const StyledInteractable = styled(Interactable)`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  min-height: ${(p) => p.theme.sizes[8]};
  -webkit-font-smoothing: antialiased;
  padding: ${(p) => p.theme.space[3]} ${(p) => p.theme.space[4]};
  cursor: pointer;
  user-select: none;
  text-align: center;
  border: none;
  border-radius: ${(p) => p.theme.radii[1]};
  outline: none;
  align-items: center;
  justify-content: center;
  &:disabled {
    pointer-events: none;
  }
  &:focus {
    outline: none;
  }
  ${(p) => css`
    ${variant({
      prop: "typography",
      scale: "typography.type",
    })}
    ${ButtonVariants(p.theme)}
  `}
`;
