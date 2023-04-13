import { deleteOneBook } from "../../../funcs/deleteOnebook";
import { useAllBooksContext } from "../../../hooks/useAllBooksContext";
import { Book } from "../../../types/Book";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";
import { Container } from "./style";

export type MenuBodyProps = {
  isMenuMode: boolean;
};

// サービスネームのコンポーネント
export const MenuBody: React.FC<MenuBodyProps> = (props) => {
  const {AllBooks, refreshAllBooks, selectedBookId, setSelectedBookId} = useAllBooksContext();
  /*
  const AllBooks: Book[] = [
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
    { id: 4, title: "Book 4" },
    { id: 5, title: "Book 5" },
    { id: 6, title: "Book 6" },
    { id: 7, title: "Book 7" },
    { id: 8, title: "Book 8" },
    { id: 9, title: "Book 9" },
    { id: 10, title: "Book 10" },
    { id: 11, title: "Book 11" },
    { id: 12, title: "Book 12" },
    { id: 13, title: "Book 13" },
    { id: 14, title: "Book 14" },
    { id: 15, title: "Book 15" },
    { id: 16, title: "Book 16" },
    { id: 17, title: "Book 17" },
    { id: 18, title: "Book 18" },
    { id: 19, title: "Book 19" },
    { id: 20, title: "Book 20" },
    { id: 21, title: "Book 21" },
    { id: 22, title: "Book 22" },
    { id: 23, title: "Book 23" },
  ];
  */
  return (
    <Container>
      {
        AllBooks.map((book: Book, index: number) => {

          return (
            <MenuItem
              key={index}
              id={book.id}
              title={book.title}
              selected={book.id===selectedBookId}
              isMenuMode={props.isMenuMode}
              onClick={() => setSelectedBookId(book.id)}
              deleteButtonHandler={async()=>{
                await deleteOneBook(book.id);
                refreshAllBooks();
              }}
            />
          );
        })
      }
    </Container>
  );
};
