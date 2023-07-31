import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMonthlyTransactionCountRequest,
  GetMonthlyTransactionCountResponse,
} from "src/types/financials/request_response_financial_analytics_service";

const GetMonthlyTransactionCount = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyTransactionCount: builder.query({
      query: (req: GetMonthlyTransactionCountRequest) => ({
        url: getMonthlyCategorizedTransactionCountEndpoint(req),
      }),
      transformResponse: (response: GetMonthlyTransactionCountResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result) =>
        result && result.monthlyTransactionCounts
          ? result.monthlyTransactionCounts.map((transaction) => ({
              type: "MONTHLY_TRANSACTION_METRICS",
              id: transaction.month,
            }))
          : [],
    }),
  }),
  overrideExisting: false,
});

const getMonthlyCategorizedTransactionCountEndpoint = (
  req: GetMonthlyTransactionCountRequest
) => {
  let url = `/service/financials/analytics/category-monthly-transaction-count/user/${req.userId}`;

  if (req.month) {
    if (url.includes("?")) {
      url += `&month=${req.month}`;
    } else {
      url += `?month=${req.month}`;
    }
  }

  if (req.pageNumber) {
    if (url.includes("?")) {
      url += `&pageNumber=${req.pageNumber}`;
    } else {
      url += `?pageNumber=${req.pageNumber}`;
    }
  }

  if (req.pageSize) {
    if (url.includes("?")) {
      url += `&pageSize=${req.pageSize}`;
    } else {
      url += `?pageSize=${req.pageSize}`;
    }
  }

  return url;
};

export { GetMonthlyTransactionCount };
export const { useGetMonthlyTransactionCountQuery } =
  GetMonthlyTransactionCount;
