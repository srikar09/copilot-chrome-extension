import {
  CheckEmailExistsRequest,
  CheckEmailExistsResponse,
} from "src/types/request-response/check-email-exists";
import { processErrorIfPresent } from "../../lib/utils";
import { api } from "../api/api";

const CheckEmailExists = api.injectEndpoints({
  endpoints: (builder) => ({
    checkEmailExists: builder.mutation({
      query: (req: CheckEmailExistsRequest) => ({
        url: `/user/email/${req.email}/exists`,
        method: "GET",
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
