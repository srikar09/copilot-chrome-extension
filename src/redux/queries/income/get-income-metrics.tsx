import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetIncomeMetricsRequest,
  GetIncomeMetricsResponse,
} from "src/types/request-response/get-income-metrics";

const GetIncomeMetrics = api.injectEndpoints({
  endpoints: (builder) => ({
    getIncomeMetrics: builder.query({
      query: (req: GetIncomeMetricsRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetIncomeMetricsResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetIncomeMetricsRequest) => {
  let url = `/service/financials/analytics/income/user/${req.userId}`;
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

export { GetIncomeMetrics };
export const { useGetIncomeMetricsQuery } = GetIncomeMetrics;
