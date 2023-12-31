import { IBook } from "../../redux/Fetaures/AddNewBook/addNewBookSlice";

export interface IUser {
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  id?: string;
}

export interface ILoginResponse {
  data: {
    accessToken: string;
  };
  success: boolean;
  message: string;
  statusCode: number;
}
export interface IErrorResponse {
  data: {
    errorMessages: [
      {
        path: string;
        message: string;
      }
    ];
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
}

export interface IReview {
  name?: string;
  email?: string;
  message?: string;
}

export type IWishList = {
  email: string;
  data: IBook;
};

export type IUpdateReadingStatus = {
  email: string;
  status: string;
};
export interface IWishListResponse {
  data: [
    {
      email: string;
      data: IBook[];
    }
  ];
  message: string;
  success: boolean;
  statusCode: number;
}
