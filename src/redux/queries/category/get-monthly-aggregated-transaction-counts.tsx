import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetTransactionAggregatesRequest,
  GetTransactionAggregatesResponse,
} from "src/types/financials/request_response_financial_analytics_service";

const GetMonthlyAggregatedTransactionCounts = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyAggregatedTransactionCounts: builder.query({
      query: (req: GetTransactionAggregatesRequest) => ({
        url: getMonthlyAggregatedTransactionCountsEndpoint(req),
      }),
      transformResponse: (response: GetTransactionAggregatesResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const getMonthlyAggregatedTransactionCountsEndpoint = (
  req: GetTransactionAggregatesRequest
) => {
  let url = `/service/financials/analytics/transaction-aggregates/${req.userId}`;

  if (req.month) {
    if (url.includes("?")) {
      url += `&month=${req.month}`;
    } else {
      url += `?month=${req.month}`;
    }
  }

  if (req.personalFinanceCategoryPrimary) {
    if (url.includes("?")) {
      url += `&personalFinanceCategoryPrimary=${req.personalFinanceCategoryPrimary}`;
    } else {
      url += `?personalFinanceCategoryPrimary=${req.personalFinanceCategoryPrimary}`;
    }
  }

  if (req.locationCity) {
    if (url.includes("?")) {
      url += `&locationCity=${req.locationCity}`;
    } else {
      url += `?locationCity=${req.locationCity}`;
    }
  }

  if (req.paymentChannel) {
    if (url.includes("?")) {
      url += `&paymentChannel=${req.paymentChannel}`;
    } else {
      url += `?paymentChannel=${req.paymentChannel}`;
    }
  }

  if (req.merchantName) {
    if (url.includes("?")) {
      url += `&merchantName=${req.merchantName}`;
    } else {
      url += `?merchantName=${req.merchantName}`;
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

export { GetMonthlyAggregatedTransactionCounts };
export const { useGetMonthlyAggregatedTransactionCountsQuery } =
  GetMonthlyAggregatedTransactionCounts;
