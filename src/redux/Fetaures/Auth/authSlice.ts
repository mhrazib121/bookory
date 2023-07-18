import { IUser } from "../../../types/Common";
import { api } from "../Api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ data }: { data: IUser }) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: ({ data }: { data: Partial<IUser> }) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getProfile: builder.query({
      query: (token: string) => ({
        url: "/users/my-profile",
        method: "GET",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useGetProfileQuery } =
  authApi;
