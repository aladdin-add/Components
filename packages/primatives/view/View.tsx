import React, { ReactNode } from "react";

import { StyledView } from "./styled";

export interface Props {
  children: ReactNode;
  as?: any;
  autoid: string;
}

const View = ({ children, as, autoid }: Props) => (
  <StyledView data-autoid={autoid} as={as}>
    {children}
  </StyledView>
);

export default View;
