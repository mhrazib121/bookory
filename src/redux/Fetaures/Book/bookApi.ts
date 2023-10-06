import {
  IBookErrorResponse,
  IBookResponse,
  IBooksQuery,
  IBooksResponse,
} from "../../../types/Book";
import { IBook } from "../AddNewBook/addNewBookSlice";
import { api } from "../Api/apiSlice";
import { SerializedError } from "@reduxjs/toolkit";
import { IReview } from "../../../types/Common";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksResponse, IBooksQuery>({
      query: ({ genre, publicationDate, searchText }: IBooksQuery) => {
        let booksQuery = "/books/?";

        if (searchText && searchText.length > 0) {
          booksQuery += `&searchText=${searchText}`;
        }
        if (publicationDate && publicationDate.length > 0) {
          booksQuery += `&publicationDate=${publicationDate}`;
        }
        if (genre && genre.length > 0) {
          booksQuery += `&genre=${genre}`;
        }

        return booksQuery;
        console.log(booksQuery);
      },
      providesTags: ["books", "book"],
    }),
    addBook: builder.mutation<
      IBookResponse | IBookErrorResponse | SerializedError,
      { data: IBook }
    >({
      query: ({ data }: { data: IBook }) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books", "book"],
    }),
    singleBook: builder.query<{ data: IBook }, string>({
      query: (id: string) => `/books/${id}`,
      providesTags: ["book"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }: { id: string; data: IBook }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books", "book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books", "book"],
    }),
    addReview: builder.mutation({
      query: ({ id, data }: { id: string; data: IReview }) => ({
        url: `/review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useSingleBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
} = productApi;
