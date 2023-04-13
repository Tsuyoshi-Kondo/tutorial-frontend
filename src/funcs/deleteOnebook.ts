import axios from "axios";

// 本を削除するDELETEリクエスト
export const deleteOneBook = async(id: number) => {
  try{
    await axios.delete(process.env.REACT_APP_REQUEST_URL! + id);
  }
  catch(error){
    console.log(error);
  }
}
