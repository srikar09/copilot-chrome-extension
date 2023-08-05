import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetCategoryMonthlyTransactionCountRequest,
  GetCategoryMonthlyTransactionCountResponse,
} from "src/types/request-response/get-category-monthly-transaction-count";

/**
 * Endpoint creator for getting categorized monthly transaction counts.
 * Uses a query builder from the `api` object to create the endpoint.
 * The query builder takes a request of type GetCategoryMonthlyTransactionCountRequest and returns an endpoint.
 * It also transforms the response to process any present error message.
 */
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

/**
 * Function to generate a URL for the categorized monthly transaction counts API endpoint.
 * Takes in a request of type GetCategoryMonthlyTransactionCountRequest, and returns a URL string.
 * The URL includes query parameters for the user ID, month, personal finance category, page number, and page size.
 *
 * @param req - Object containing the parameters for the request.
 * @returns - A URL string to be used for the API endpoint.
 */
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

/**
 * Exporting the generated endpoint and its related query hook.
 */
export { GetCategorizedMonthlyTransactionCounts };
export const { useGetCategorizedMonthlyTransactionCountsQuery } =
  GetCategorizedMonthlyTransactionCounts;
