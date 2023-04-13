import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import PlusIcon from "../../../assets/plus.svg";
import DoneIcon from "../../../assets/done.svg";
import { Container } from "./style";

export type MenuEditProps = {
  newPageButtonHandler?: () => void;
  doneButtonHandler?: () => void;
};

// New pageボタンとDoneボタンのコンポーネント
export const MenuEdit: React.FC<MenuEditProps> = (props) => {
  return (
    <Container>
      <CustomButton
        variant={"secondary"}
        shape={"rectangle"}
        src={PlusIcon}
        alt={"新規作成"}
        text={"New page"}
        onClick={props.newPageButtonHandler}
        dataTestId={"testNewPageButton"}
      />
      <CustomButton
        variant={"primary"}
        shape={"rectangle"}
        src={DoneIcon}
        alt={"編集モードを解除"}
        text={"Done"}
        onClick={props.doneButtonHandler}
        dataTestId={"testDoneButton"}
      />
    </Container>
  );
};
