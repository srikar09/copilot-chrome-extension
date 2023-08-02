import {
  PlaidInitiateTokenUpdateRequest,
  PlaidInitiateTokenUpdateResponse,
} from "src/types/financials/request_response_financial_service";
import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";

const UpdateLinkToken = api.injectEndpoints({
  endpoints: (builder) => ({
    updateLinkToken: builder.mutation({
      query: (req: PlaidInitiateTokenUpdateRequest) => ({
        url: `/financials/initiate-token-update`,
        method: "POST",
        body: req,
      }),
      transformResponse: (response: PlaidInitiateTokenUpdateResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { UpdateLinkToken };
export const { useUpdateLinkTokenMutation } = UpdateLinkToken;
