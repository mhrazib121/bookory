import { IBook } from "../AddNewBook/addNewBookSlice";
import { api } from "../Api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    addBook: builder.mutation({
      query: ({ data }: { data: IBook }) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books", "book"],
    }),
    singleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),
    editBook: builder.mutation({
      query: ({ id, data }: { id: string; data: IBook }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books", "book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useSingleBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = productApi;
