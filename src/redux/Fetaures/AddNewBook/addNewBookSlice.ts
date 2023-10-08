import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  email: string;
  imgUrl: string;
  reviews:
    | []
    | [
        {
          name?: string;
          email?: string;
          message?: string;
        }
      ];
  id?: string;
  readingStatus?: string;
}

interface BookState {
  books: IBook[];
}

const initialState: BookState = {
  books: [],
};

const AddNewBookSlice = createSlice({
  name: "addNewBook",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = AddNewBookSlice.actions;
export default AddNewBookSlice.reducer;
