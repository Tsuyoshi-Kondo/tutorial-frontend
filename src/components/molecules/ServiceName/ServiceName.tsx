import React from "react";
import { Container } from "./style";
import LogoIcon from "../../../assets/logo.svg";
import { TextProps, Text } from "../../atoms/Text/Text";

// サービスネームのコンポーネント
export const ServiceName: React.FC = () => {
  const textProps: TextProps = {
    str: "ServiceName",
    color: "#1A1A1A",
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "24px",
    width: "161px",
  };
  return (
    <Container>
      <img src={LogoIcon} alt={"サービスネーム"} />
      <Text {...textProps} />
    </Container>
  );
};
