import { CreateAccountRequest } from "src/types/request-response/create-account";
import { api } from "../api/api";

const CreateUserAccount = api.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (params: { body: CreateAccountRequest }) => ({
        url: `/user/registration`,
        method: "POST",
        body: params.body,
      }),
      transformResponse: (response: { userID: number }) => {
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { CreateUserAccount };
export const { useCreateAccountMutation } = CreateUserAccount;
