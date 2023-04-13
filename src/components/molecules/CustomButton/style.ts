import styled from "styled-components";
import { TextProps } from "../../atoms/Text/Text";
import { CustomButtonProps } from "./CustomButton";

// ボタンのスタイル
export const Container = styled.button<{
  variant: CustomButtonProps["variant"];
  shape: CustomButtonProps["shape"];
}>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ${({ shape }) => {
    const containerSizeConfig = makeContainerSizeConfig(shape);
    return `
          height: ${containerSizeConfig.height};
          width: ${containerSizeConfig.width};
        `;
  }}
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  ${({ variant }) => {
    const backgroundConfig = makeBackgroundConfig(variant);
    return `
            border: ${backgroundConfig.border};
            background: ${backgroundConfig.main};
            :hover {
                background: ${backgroundConfig.hover};
            }
            :active {
                background: ${backgroundConfig.active};
            }
        `;
  }}
`;

// ボタンのサイズを求める関数
const makeContainerSizeConfig = (
  shape: CustomButtonProps["shape"]
): { height: string; width: string } => {
  switch (shape) {
    case "rectangle":
      return {
        height: "40px",
        width: "90px",
      };
    case "square":
      return {
        height: "40px",
        width: "40px",
      };
    default:
      return {
        height: "40px",
        width: "90px",
      };
  }
};

// ボタンの背景色を求める関数
const makeBackgroundConfig = (
  variant: CustomButtonProps["variant"]
): { border: string; main: string; hover: string; active: string } => {
  switch (variant) {
    case "primary":
      return {
        border: "none",
        main: "#4CB3F8",
        hover: "#3C8EC4",
        active: "#347CAB",
      };
    case "secondary":
      return {
        border: "2px solid #4CB3F8",
        main: "#FFFFFF",
        hover: "#CCCCCC",
        active: "#B3B3B3",
      };
    case "tertiary":
      return {
        border: "none",
        main: "#B3B3B3",
        hover: "#999999",
        active: "#808080",
      };
    default:
      return {
        border: "none",
        main: "#4CB3F8",
        hover: "#3C8EC4",
        active: "#347CAB",
      };
  }
};

// ボタンのテキストの色を求める関数
export const makeTextConfig = (
  variant: CustomButtonProps["variant"]
): TextProps["color"] => {
  switch (variant) {
    case "primary":
      return "#FFFFFF";
    case "secondary":
      return "#4CB3F8";
    case "tertiary":
      return "#FFFFFF";
    default:
      return "#FFFFFF";
  }
};
