import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetExpenseMetricsRequest,
  GetExpenseMetricsResponse,
} from "src/types/request-response/get-expense-metrics";

const GetExpenseMetrics = api.injectEndpoints({
  endpoints: (builder) => ({
    getExpenseMetrics: builder.query({
      query: (req: GetExpenseMetricsRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetExpenseMetricsResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetExpenseMetricsRequest) => {
  let url = `/service/financials/analytics/expenses/user/${req.userId}`;

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

export { GetExpenseMetrics };
export const { useGetExpenseMetricsQuery } = GetExpenseMetrics;
