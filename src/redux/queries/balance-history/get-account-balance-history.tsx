import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetAccountBalanceHistoryRequest,
  GetAccountBalanceHistoryResponse,
} from "src/types/financials/request_response_financial_analytics_service";

const GetAccountBalanceHistory = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccountBalanceHistory: builder.query({
      query: (req: GetAccountBalanceHistoryRequest) => ({
        url: `/service/financials/analytics/balance-history/account/${req.plaidAccountId}/pagenumber/${req.pageNumber}/pagesize/${req.pageSize}`,
      }),
      transformResponse: (response: GetAccountBalanceHistoryResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { GetAccountBalanceHistory };
export const { useGetAccountBalanceHistoryQuery } = GetAccountBalanceHistory;
