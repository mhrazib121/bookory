import {
  IUpdateReadingStatus,
  IWishList,
  IWishListResponse,
} from "../../../types/Common";
import { IBook } from "../AddNewBook/addNewBookSlice";
import { api } from "../Api/apiSlice";

const WishListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query<IWishListResponse, { status?: string }>({
      query: ({ status }) => {
        let wishlistQuery = "/wishlist/?";

        if (status) {
          wishlistQuery += `&readingStatus=${status}`;
        }
        return wishlistQuery;
      },
      providesTags: ["wishList"],
    }),
    getSingleWishBook: builder.query<
      { data: IBook },
      { email: string; id: string }
    >({
      query: ({ email, id }) => {
        return `/wishlist/book-details/?&email=${email}&id=${id}`;
      },
      providesTags: ["wishListSingleBook"],
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
    updateReadingStatus: builder.mutation({
      query: ({ data, id }: { data: IUpdateReadingStatus; id: string }) => ({
        url: `/wishlist/updateStatus/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishList", "wishListSingleBook"],
    }),
  }),
});

export const {
  useGetWishListQuery,
  useAddWishListMutation,
  useRemoveWishlistMutation,
  useUpdateReadingStatusMutation,
  useGetSingleWishBookQuery,
} = WishListApi;
