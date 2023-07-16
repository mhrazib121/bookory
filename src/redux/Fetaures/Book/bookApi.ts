import { api } from "../Api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
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
  //   usePostCommentMutation,
  //   useSingleProductQuery,
} = productApi;
