import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import { GetUserAccountBalanceHistoryRequest } from "src/types/financials/request_response_financial_analytics_service";
import { GetUserAccountBalanceHistoryResponse } from "src/types/response/GetUserAccountBalanceHistoryResponse";

const GetAllConnectedAccountsBalanceHistory = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllConnectedAccountsBalanceHistory: builder.query({
      query: (req: GetUserAccountBalanceHistoryRequest) => ({
        url: `/service/financials/analytics/balance-history/user/${req.userId}/pagenumber/${req.pageNumber}/pagesize/${req.pageSize}`,
      }),
      transformResponse: (response: GetUserAccountBalanceHistoryResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { GetAllConnectedAccountsBalanceHistory };
export const { useGetAllConnectedAccountsBalanceHistoryQuery } =
  GetAllConnectedAccountsBalanceHistory;
