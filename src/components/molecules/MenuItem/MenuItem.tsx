import React from "react";
import { Container } from "./style";
import { Book } from "../../../types/Book";
import DeleteIcon from "../../../assets/delete.svg";
import { Text, TextProps } from "../../atoms/Text/Text";

export type MenuItemProps = {
  key?: number;
  isMenuMode: boolean;
  selected: boolean;
  onClick?: () => void;
  deleteButtonHandler?: () => void;
  dataTestId?: string;
} & Book;

// メニュー項目のコンポーネント
export const MenuItem: React.FC<MenuItemProps> = (props) => {
  let textColor: TextProps["color"] = "#333333";
  let textFontWeight: TextProps["fontWeight"] = 400;
  if (props.selected) {
    textColor = "#32A8F8";
    textFontWeight = 700;
  }
  const textProps: TextProps = {
    str: props.title,
    color: textColor,
    fontSize: 16,
    fontWeight: textFontWeight,
    width: "186px",
  };
  return (
    <Container
      selected={props.selected}
      onClick={props.onClick}
      data-testid={props.dataTestId}
    >
      <Text {...textProps} />
      {props.isMenuMode && (
        <img
          src={DeleteIcon}
          alt={"本の削除"}
          onClick={props.deleteButtonHandler}
        />
      )}
    </Container>
  );
};
