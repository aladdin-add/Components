import React, { ReactNode } from "react";

import Text from "@/primatives/text";
import View from "@/primatives/view";

export interface Props {
  children: string | ReactNode;
  iconName: string;
  autoid?: string;
}

const Button = ({ children, autoid = "" }: Props) => {
  return (
    <View as="button" autoid={`${autoid}_button`}>
      {typeof children === "string" ? <Text>{children}</Text> : { children }}
    </View>
  );
};

export default Button;
