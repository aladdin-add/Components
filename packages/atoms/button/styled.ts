import styled from "styled-components";
import { system, get, compose } from "styled-system";
import { variant, getContrast } from "@aw-web-design/theme";
import Interactable from "@//primatives/interactable";

const config = {
    bg: {
        property: 'color',
        scale: 'colors',
        transform: (n, scale) => {
            console.log(n, scale);
            console.log(get(scale, n, n));
            console.log(getContrast("#5a90b1"))
            return getContrast(get(scale, n, n));
        }
    }
}

const contrast = system(config as any);

export const StyledInteractable = styled.div`
    border: 1px solid #000;
    border-radius: 5px;

  ${variant({
    prop: "typography",
    scale: "typography.type",
  })}

  ${compose(
      contrast
  )}
  
`;
