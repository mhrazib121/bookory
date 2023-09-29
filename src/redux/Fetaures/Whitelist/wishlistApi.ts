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
      invalidatesTags: ["wishList"],
    }),
  }),
});

export const { useGetWishListQuery, useAddWishListMutation } = WishListApi;
