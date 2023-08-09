import { CheckEmailExistsRequest } from 'src/types/request-response/CheckEmailExistsRequest';
import { CheckEmailExistsResponse } from 'src/types/request-response/CheckEmailExistsResponse';
import { processErrorIfPresent } from "../../lib/utils";
import { api } from '../api/api';

const CheckEmailExists = api.injectEndpoints({
  endpoints: (builder) => ({
    checkEmailExists: builder.mutation({
      query: (req: CheckEmailExistsRequest) => ({
        url: `/user/email/${req.email}/exists`,
        method: 'GET',
      }),
      transformResponse: (response: CheckEmailExistsResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { CheckEmailExists };
export const { useCheckEmailExistsMutation } = CheckEmailExists;
