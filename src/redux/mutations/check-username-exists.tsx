import { api } from "../api/api";
import { processErrorIfPresent } from "../../lib/utils";
import {
  CheckUsernameExistsRequest,
  CheckUsernameExistsResponse,
} from "src/types/request-response/check-username-exists";

const CheckUsernameExists = api.injectEndpoints({
  endpoints: (builder) => ({
    checkUsernameExists: builder.mutation({
      query: (req: CheckUsernameExistsRequest) => ({
        url: `/user/username/${req.username}/exists`,
        method: "GET",
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
