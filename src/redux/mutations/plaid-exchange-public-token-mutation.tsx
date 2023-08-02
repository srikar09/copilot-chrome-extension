import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";
import { PlaidExchangeTokenRequest } from "src/types/financials/request_response_financial_service";
import { PlaidExchangeTokenResponse } from "src/types/response/PlaidExchangeTokenResponse";

/**
 * RTK Query makes it possible to trim down your initial bundle size by allowing you
 * to inject additional endpoints after you've set up your initial service definition.
 * This can be very beneficial for larger applications that may have many endpoints.
 * For example
 *
 * injectEndpoints accepts a collection of endpoints, as well as an optional overrideExisting parameter.
 * Calling injectEndpoints will inject the endpoints into the original API, but also give you that same API
 * with correct types for these endpoints back. (Unfortunately, it cannot modify the types for the original definition.)
 *
 * https://redux-toolkit.js.org/rtk-query/usage/code-splitting
 *
 * PlaidExchangePublicTokenMutation is a mutation that exchanges a public token for an access token.
 * The public token is obtained from the Plaid Link component. The access token is used to access
 * the Plaid API.
 *
 * https://plaid.com/docs/api/tokens/#token-exchange-flow
 */
const PlaidExchangePublicTokenMutation = api.injectEndpoints({
  endpoints: (builder) => ({
    plaidExchangePublicToken: builder.mutation({
      // /v1/gateway/financials/exchange-token
      query: (req: PlaidExchangeTokenRequest) => ({
        url: `/financials/exchange-token`,
        method: "POST",
        body: req,
      }),
      transformResponse: (response: PlaidExchangeTokenResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { PlaidExchangePublicTokenMutation };
export const { usePlaidExchangePublicTokenMutation } =
  PlaidExchangePublicTokenMutation;
