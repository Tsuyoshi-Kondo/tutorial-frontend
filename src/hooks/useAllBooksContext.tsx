import { createContext, useContext, useEffect, useState } from "react";
import { Book } from "../types/Book";
import axios from "axios";

export type AllBooksContextType = {
  AllBooks: Book[];
  setAllBooks: (AllBook: Book[])=>void;
  refreshAllBooks: ()=>void;
  selectedBookId: number;
  setSelectedBookId: (selectedBookId: number)=>void;
}
const AllBooksContext = createContext<AllBooksContextType>({
  AllBooks: [],
  setAllBooks: () => {},
  refreshAllBooks: () => {},
  selectedBookId: 0,
  setSelectedBookId: () => {},
});
export const AllBooksProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [AllBooks, setAllBooks] = useState<Book[]>([]);
  const [refresh, setRefresh] = useState<number>(0);
  const [selectedBookId, setSelectedBookId] = useState<number>(0);
  useEffect(() => {
    axios.get(process.env.REACT_APP_REQUEST_URL!)
      .then(res=>{
        const getList: Book[] = [];
        res.data.forEach((value: any, i: number) => {
          getList[i] = {
            id: value.id,
            title: value.title,
            body: value.body,
            createdAt: value.createdAt,
            updatedAt: value.updatedAt,
          }
        });
        setAllBooks(getList);
      })
  }, [refresh]);
  const refreshAllBooks = () => {
    setRefresh(refresh => refresh+1);
  }

  return (
    <AllBooksContext.Provider
      value={{
        AllBooks,
        setAllBooks,
        refreshAllBooks,
        selectedBookId,
        setSelectedBookId,
      }}>
      {children}
    </AllBooksContext.Provider>
  );
}
export const useAllBooksContext = () => {
  return useContext(AllBooksContext);
}
