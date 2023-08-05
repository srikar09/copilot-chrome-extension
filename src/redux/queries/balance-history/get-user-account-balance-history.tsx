import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetUserAccountBalanceHistoryRequest,
  GetUserAccountBalanceHistoryResponse,
} from "src/types/request-response/get-user-account-balance-history";

const GetUserAccountBalanceHistory = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserAccountBalanceHistory: builder.query({
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

export { GetUserAccountBalanceHistory };
export const { useGetUserAccountBalanceHistoryQuery } =
  GetUserAccountBalanceHistory;
