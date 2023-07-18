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
  }),
});

export const { useSignUpMutation } = authApi;
