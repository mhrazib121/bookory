import { IWishList, IWishListResponse } from "../../../types/Common";
import { api } from "../Api/apiSlice";

const WishListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query<IWishListResponse, undefined>({
      query: () => "/wishlist",
      providesTags: ["wishList"],
    }),
    addWishList: builder.mutation({
      query: ({ data }: { data: IWishList }) => ({
        url: "/wishlist/add-wishbook",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishList", "book"],
    }),
    removeWishlist: builder.mutation({
      query: ({ data }: { data: IWishList }) => ({
        url: "/wishlist/remove-wishbook",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["wishList", "book"],
    }),
  }),
});

export const {
  useGetWishListQuery,
  useAddWishListMutation,
  useRemoveWishlistMutation,
} = WishListApi;
