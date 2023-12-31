import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";

export interface IBooksResponse {
  data: IBook[];
  message: string;
  success: boolean;
  statusCode: number;
}

export interface IBooksQuery {
  searchText?: string;
  genre?: string;
  publicationDate?: string;
}

export interface IBookResponse {
  data: {
    data: IBook;
  };
  message: string;
  success: boolean;
  statusCode: number;
}
export interface IBookErrorResponse {
  error: {
    data: {
      message: string;
      success: boolean;
      errorMessages: [];
    };
    status: number;
  };
}
