import { PlaidLinkRequest } from "src/types/requests/PlaidLinkRequest";
import { PlaidLinkResponse } from "src/types/response/PlaidLinkResponse";
import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";

const InitiateLinkToken = api.injectEndpoints({
  endpoints: (builder) => ({
    linkToken: builder.mutation({
      query: (req: PlaidLinkRequest) => ({
        url: `/financials/initiate-token-exchange`,
        method: "POST",
        body: req,
      }),
      transformResponse: (response: PlaidLinkResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { InitiateLinkToken };
export const { useLinkTokenMutation } = InitiateLinkToken;
