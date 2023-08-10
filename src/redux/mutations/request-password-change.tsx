import {
  RequestPasswordResetRequest,
  RequestPasswordResetResponse,
} from "src/types/request-response/initiate-password-reset";
import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";

const RequestPasswordChange = api.injectEndpoints({
  endpoints: (builder) => ({
    requestPasswordChange: builder.mutation({
      query: (req: RequestPasswordResetRequest) => ({
        url: `/auth/request-password-change`,
        method: "POST",
        body: req,
      }),
      transformResponse: (response: RequestPasswordResetResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { RequestPasswordChange };
export const { useRequestPasswordChangeMutation } = RequestPasswordChange;
