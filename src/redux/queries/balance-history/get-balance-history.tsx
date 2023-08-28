import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetUserAccountBalanceHistoryRequest,
  GetUserAccountBalanceHistoryResponse,
} from "src/types/request-response/get-user-account-balance-history";

const GetAllConnectedAccountsBalanceHistory = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Query function to fetch account balance history for all connected accounts of a user.
     * @param {GetUserAccountBalanceHistoryRequest} req - The request object containing parameters for the API request.
     * @param {string} req.userId - The user ID for whom to fetch the account balance history.
     * @param {number} req.pageNumber - The page number for pagination.
     * @param {number} req.pageSize - The page size for pagination.
     * @returns {Object} - The object containing the URL for the API endpoint.
     */
    getAllConnectedAccountsBalanceHistory: builder.query({
      /**
       * Type of the request object used to fetch account balance history for all connected accounts of a user from the API.
       * @typedef {Object} GetUserAccountBalanceHistoryRequest
       * @property {string} userId - The user ID for whom to fetch the account balance history.
       * @property {number} pageNumber - The page number for pagination.
       * @property {number} pageSize - The page size for pagination.
       */
      query: (req: GetUserAccountBalanceHistoryRequest) => ({
        url: `/service/financials/analytics/historical-account-balance/user/${req.userId}/plaidAccountId/${req.plaidAccountId}`,
      }),
      /**
       * Function to transform the API response.
       * @param {GetUserAccountBalanceHistoryResponse} response - The response object from the API.
       * @returns {GetUserAccountBalanceHistoryResponse} - The transformed response object.
       */
      transformResponse: (response: GetUserAccountBalanceHistoryResponse) => {
        /**
         * Type of the response object returned from the API when fetching account balance history for all connected accounts of a user.
         * @typedef {Object} GetUserAccountBalanceHistoryResponse
         * @property {string} error_message - An error message, if applicable.
         * @property {any} other_data - Other data returned by the API.
         */
        processErrorIfPresent(response.error_message);
        response.historicalAccountBalance.map((accountBalance) => {
          accountBalance.time = new Date(accountBalance.time!);
        });

        return response;
      },
      providesTags: (result, error, arg) => {
        if (!result || !result.historicalAccountBalance) {
          return ["ACCOUNT_BALANCE_HISTORY"];
        }

        return [
          {
            type: "ACCOUNT_BALANCE_HISTORY",
            id: `user:${arg.userId} accountId:${arg.plaidAccountId}`,
          },
        ];
      },
    }),
  }),
  overrideExisting: false,
});

export { GetAllConnectedAccountsBalanceHistory };
/**
 * Custom hook to use the getAllConnectedAccountsBalanceHistory query.
 * @function
 * @name useGetAllConnectedAccountsBalanceHistoryQuery
 * @returns {ReturnType<typeof GetAllConnectedAccountsBalanceHistory>} - The result of the getAllConnectedAccountsBalanceHistory query.
 */
export const { useGetAllConnectedAccountsBalanceHistoryQuery } =
  GetAllConnectedAccountsBalanceHistory;
