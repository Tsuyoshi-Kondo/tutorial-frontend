import React from "react";
import { Container } from "./style";

export type TextProps = {
  str: string;
  color: "#1A1A1A" | "#333333" | "#4CB3F8" | "#32A8F8" | "#FFFFFF";
  fontSize: 10 | 12 | 16 | 24;
  fontWeight: 400 | 700;
  lineHeight?: string;
  width?: string;
};

export const Text: React.FC<TextProps> = (props) => {
  return (
    <Container
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      width={props.width}
    >
      {props.str}
    </Container>
  );
};
