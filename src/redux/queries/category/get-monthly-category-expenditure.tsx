import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetUserCategoryMonthlyExpenditureRequest,
  GetUserCategoryMonthlyExpenditureResponse,
} from "src/types/request-response/get-user-category-monthly-expenditure";

/**
 * Get monthly category expenditure
 *
 * url: {{baseUrl}}/v1/gateway/service/financials/analytics/category-monthly-expenditure/user/{{userID}}?personalFinanceCategoryPrimary={{personalFinanceCategoryPrimary}}&month={{month}}&pageNumber={{pageNumber}}&pageSize={{pageSize}}
 */
const GetMonthlyCategoryExpenditure = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyCategoryExpenditure: builder.query({
      query: (req: GetUserCategoryMonthlyExpenditureRequest) => ({
        url: getMonthlyCategoryExpenditureEndpoint(req),
      }),
      transformResponse: (
        response: GetUserCategoryMonthlyExpenditureResponse
      ) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result, error, arg) =>
        result && result.categoryMonthlyExpenditure
          ? result.categoryMonthlyExpenditure.map((expenditrue) => ({
              type: "MONTHLY_CATEGORY_EXPENDITURES",
              id: `user:${arg.userId} page:${arg.pageNumber} size:${arg.pageSize} tx:${expenditrue.month}-${expenditrue.personalFinanceCategoryPrimary}`,
            }))
          : ["MONTHLY_CATEGORY_EXPENDITURES"],
    }),
  }),
  overrideExisting: false,
});

const getMonthlyCategoryExpenditureEndpoint = (
  req: GetUserCategoryMonthlyExpenditureRequest
): string => {
  let url = `/service/financials/analytics/category-monthly-expenditure/user/${req.userId}`;
  if (req.personalFinanceCategoryPrimary) {
    url += `?personalFinanceCategoryPrimary=${req.personalFinanceCategoryPrimary}`;
  }

  if (req.month) {
    // check if the url contains a query param already
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

export { GetMonthlyCategoryExpenditure };
export const { useGetMonthlyCategoryExpenditureQuery } =
  GetMonthlyCategoryExpenditure;
