import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";
import { PlaidExchangeTokenRequest } from "src/types/financials/request_response_financial_service";
import { PlaidExchangeTokenResponse } from "src/types/response/PlaidExchangeTokenResponse";

/**
 * The `PlaidExchangePublicTokenMutation` function is a Redux Toolkit Query API endpoint injector.
 * It extends the API slice defined in the imported 'api' module with a new 'plaidExchangePublicToken' mutation endpoint.
 *
 * This endpoint is for exchanging a public token with the Plaid API. It takes a `PlaidExchangeTokenRequest`
 * object as an argument which should contain the necessary information for the public token exchange.
 *
 * The 'plaidExchangePublicToken' mutation sends a POST request to the '/financials/exchange-token' API endpoint,
 * and expects a `PlaidExchangeTokenResponse` object as a response.
 *
 * If there is an error message in the response, it will be processed by the `processErrorIfPresent` utility function.
 *
 * The `PlaidExchangePublicTokenMutation` function can be beneficial in larger applications that have many endpoints,
 * by allowing you to inject additional endpoints after setting up the initial service definition, thus keeping your initial
 * bundle size small.
 *
 * The `overrideExisting` option is set to 'false' which means that if an endpoint with the same name already
 * exists, it won't be overridden by this injector.
 *
 * This function also exports a React hook named `usePlaidExchangePublicTokenMutation` that allows components to trigger
 * this mutation.
 *
 * ref:  * https://plaid.com/docs/api/tokens/#token-exchange-flow
 *
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

// Export the `PlaidExchangePublicTokenMutation` injector and the auto-generated 'usePlaidExchangePublicTokenMutation' hook for dispatching mutations to the 'plaidExchangePublicToken' endpoint.
export { PlaidExchangePublicTokenMutation };
export const { usePlaidExchangePublicTokenMutation } =
  PlaidExchangePublicTokenMutation;
