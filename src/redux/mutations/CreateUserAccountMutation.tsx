import { api } from '../api/api';
import { CreateUserRequest } from 'src/types/request-response/CreateUserRequest';

const CreateUserAccount = api.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (params: { body: CreateUserRequest }) => ({
        url: `/user/registration`,
        method: 'POST',
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
