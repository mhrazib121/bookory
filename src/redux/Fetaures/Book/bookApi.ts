import { IBook } from "../AddNewBook/addNewBookSlice";
import { api } from "../Api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    addBook: builder.mutation({
      query: ({ data }: { data: IBook }) => ({
        url: "books/add-book",
        method: "POST",
        body: data,
      }),
    }),
    // singleProduct: builder.query({
    //   query: (id) => `/product/${id}`,
    // }),
    // postComment: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/comment/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["comments"],
    // }),
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
  //   usePostCommentMutation,
  //   useSingleProductQuery,
} = productApi;
