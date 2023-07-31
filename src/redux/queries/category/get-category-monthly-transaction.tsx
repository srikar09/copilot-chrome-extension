GetCategoryMonthlyTransactionCountRequest;

import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetCategoryMonthlyTransactionCountRequest,
  GetCategoryMonthlyTransactionCountResponse,
} from "src/types/financials/request_response_financial_analytics_service";

const GetCategorizedMonthlyTransactionCounts = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategorizedMonthlyTransactionCounts: builder.query({
      query: (req: GetCategoryMonthlyTransactionCountRequest) => ({
        url: getCategorizedMonthlyTransactionCounts(req),
      }),
      transformResponse: (
        response: GetCategoryMonthlyTransactionCountResponse
      ) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const getCategorizedMonthlyTransactionCounts = (
  req: GetCategoryMonthlyTransactionCountRequest
) => {
  let url = `/service/financials/analytics/category-monthly-transaction-count/user/${req.userId}`;

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

export { GetCategorizedMonthlyTransactionCounts };
export const { useGetCategorizedMonthlyTransactionCountsQuery } =
  GetCategorizedMonthlyTransactionCounts;
