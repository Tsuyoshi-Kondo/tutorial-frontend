import React from "react";
import { TextProps, Text } from "../../atoms/Text/Text";
import { Container, makeTextConfig } from "./style";

export type CustomButtonProps = {
  variant: "primary" | "secondary" | "tertiary";
  shape: "rectangle" | "square";
  src: string;
  alt: string;
  text: string;
  onClick?: () => void;
  dataTestId?: string;
};

// ボタンのコンポーネント（primary or secondary or tertiary, 長方形 or 正方形）
export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const textColor = makeTextConfig(props.variant);
  const textProps: TextProps = {
    str: props.text,
    color: textColor,
    fontSize: 10,
    lineHeight: "10px",
    fontWeight: 700,
  };
  return (
    <Container
      variant={props.variant}
      shape={props.shape}
      onClick={props.onClick}
      data-testid={props.dataTestId}
    >
      <img src={props.src} alt={props.alt} />
      <Text {...textProps} />
    </Container>
  );
};
