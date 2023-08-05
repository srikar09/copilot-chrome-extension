import { PlaidLinkRequest } from "src/types/requests/PlaidLinkRequest";
import { PlaidLinkResponse } from "src/types/response/PlaidLinkResponse";
import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";

/**
 * The `InitiateLinkToken` function is a Redux Toolkit Query API endpoint injector.
 * It extends the API slice defined in the imported 'api' module with a new 'linkToken' mutation endpoint.
 *
 * This endpoint is for initiating the exchange of a link token with the Plaid API. It takes a `PlaidLinkRequest`
 * object as an argument which should contain the necessary information for the link token exchange.
 *
 * The 'linkToken' mutation sends a POST request to the '/financials/initiate-token-exchange' API endpoint,
 * and expects a `PlaidLinkResponse` object as a response.
 *
 * If there is an error message in the response, it will be processed by the `processErrorIfPresent` utility function.
 *
 * The `InitiateLinkToken` function can be beneficial in larger applications that have many endpoints, by allowing
 * you to inject additional endpoints after setting up the initial service definition, thus keeping your initial
 * bundle size small.
 *
 * The `overrideExisting` option is set to 'false' which means that if an endpoint with the same name already
 * exists, it won't be overridden by this injector.
 */
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
