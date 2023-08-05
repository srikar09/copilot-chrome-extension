import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetAccountBalanceHistoryRequest,
  GetAccountBalanceHistoryResponse,
} from "src/types/request-response/get-account-balance-history";

/**
 * Function to fetch account balance history from the API.
 * @param {Object} req - The request object containing parameters for the API request.
 * @param {string} req.plaidAccountId - The Plaid account ID.
 * @param {number} req.pageNumber - The page number for pagination.
 * @param {number} req.pageSize - The page size for pagination.
 * @returns {Promise<GetAccountBalanceHistoryResponse>} - A Promise containing the response object.
 */
const GetAccountBalanceHistory = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Query function to fetch account balance history.
     * @param {GetAccountBalanceHistoryRequest} req - The request object containing parameters for the API request.
     * @param {string} req.plaidAccountId - The Plaid account ID.
     * @param {number} req.pageNumber - The page number for pagination.
     * @param {number} req.pageSize - The page size for pagination.
     * @returns {Object} - The object containing the URL for the API endpoint.
     */
    getAccountBalanceHistory: builder.query({
      query: (req: GetAccountBalanceHistoryRequest) => ({
        url: `/service/financials/analytics/balance-history/account/${req.plaidAccountId}/pagenumber/${req.pageNumber}/pagesize/${req.pageSize}`,
      }),
      /**
       * Function to transform the API response.
       * @param {GetAccountBalanceHistoryResponse} response - The response object from the API.
       * @returns {GetAccountBalanceHistoryResponse} - The transformed response object.
       */
      transformResponse: (response: GetAccountBalanceHistoryResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

/**
 * Type of the request object used to fetch account balance history from the API.
 * @typedef {Object} GetAccountBalanceHistoryRequest
 * @property {string} plaidAccountId - The Plaid account ID.
 * @property {number} pageNumber - The page number for pagination.
 * @property {number} pageSize - The page size for pagination.
 */

/**
 * Type of the response object returned from the API when fetching account balance history.
 * @typedef {Object} GetAccountBalanceHistoryResponse
 * @property {string} error_message - An error message, if applicable.
 * @property {any} other_data - Other data returned by the API.
 */
export { GetAccountBalanceHistory };

/**
 * Custom hook to use the getAccountBalanceHistory query.
 * @function
 * @name useGetAccountBalanceHistoryQuery
 * @returns {ReturnType<typeof GetAccountBalanceHistory>} - The result of the getAccountBalanceHistory query.
 */
export const { useGetAccountBalanceHistoryQuery } = GetAccountBalanceHistory;
