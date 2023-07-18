import { api } from "../Api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.query({
      query: () => "/signup",
    }),
  }),
});

export const { useSignUpQuery } = authApi;
