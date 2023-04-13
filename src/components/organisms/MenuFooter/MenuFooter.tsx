import { CustomButton } from "../../molecules/CustomButton/CustomButton";
import { MenuEdit } from "../../molecules/MenuEdit/MenuEdit";
import EditIcon from "../../../assets/edit.svg";
import { Container, CustomButtonContainer, MenuEditContainer } from "./style";
import { useAllBooksContext } from "../../../hooks/useAllBooksContext";
import { createOneBook } from "../../../funcs/createOneBook";

export type MenuFooterProps = {
  isMenuMode: boolean;
  switchIsMenuMode: () => void;
};

export const MenuFooter: React.FC<MenuFooterProps> = (props) => {
  const { refreshAllBooks } = useAllBooksContext();
  return (
    <Container>
      {!props.isMenuMode ? (
        <CustomButtonContainer>
          <CustomButton
            variant={"primary"}
            shape={"rectangle"}
            src={EditIcon}
            alt={"編集モードに切替"}
            text={"Edit"}
            onClick={props.switchIsMenuMode}
            dataTestId={"testMenuEditButton"}
          />
        </CustomButtonContainer>
      ) : (
        <MenuEditContainer>
          <MenuEdit
            newPageButtonHandler={async() => {
              await createOneBook();
              refreshAllBooks();
            }}
            doneButtonHandler={props.switchIsMenuMode}
          />
        </MenuEditContainer>
      )}
    </Container>
  );
};
