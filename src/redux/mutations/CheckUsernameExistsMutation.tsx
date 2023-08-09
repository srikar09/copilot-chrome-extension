import { CheckUsernameExistsRequest } from 'src/types/request-response/CheckUsernameExistsRequest';
import { api } from '../api/api';
import { CheckUsernameExistsResponse } from 'src/types/request-response/CheckUsernameExistsResponse';
import { processErrorIfPresent } from "../../lib/utils";

const CheckUsernameExists = api.injectEndpoints({
  endpoints: (builder) => ({
    checkUsernameExists: builder.mutation({
      query: (req: CheckUsernameExistsRequest) => ({
        url: `/user/username/${req.username}/exists`,
        method: 'GET',
      }),
      transformResponse: (response: CheckUsernameExistsResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { CheckUsernameExists };
export const { useCheckUsernameExistsMutation } = CheckUsernameExists;
