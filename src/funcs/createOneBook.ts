import axios from "axios";
import { Book } from "../types/Book";

// 本を新規登録するPOSTリクエスト
export const createOneBook = async() => {
  try {
    const res = await axios.post(process.env.REACT_APP_REQUEST_URL!, {
      title: "タイトル",
      body: "コンテンツ",
    });
    const book: Book = {
      id: res.data.id,
      title: res.data.title,
      body: res.data.body,
      createdAt: res.data.createdAt,
      updatedAt: res.data.updatedAt,
    };
    return book;
  }
  catch (error) {
    console.log(error);
  }
}
