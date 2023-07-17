import { IBook } from "../AddNewBook/addNewBookSlice";
import { api } from "../Api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    addBook: builder.mutation({
      query: ({ data }: { data: IBook }) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
    }),
    singleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    editBook: builder.mutation({
      query: ({ id, data }: { id: string; data: IBook }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["comments"],
    // }),
  }),
});

export const {
  //   useGetCommentQuery,
  useGetBooksQuery,
  useAddBookMutation,
  useSingleBookQuery,
  useEditBookMutation,
  useDeleteBookMutation,
  //   usePostCommentMutation,
  //   useSingleProductQuery,
} = productApi;
