import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetUserCategoryMonthlyIncomeRequest,
  GetUserCategoryMonthlyIncomeResponse,
} from "src/types/financials/request_response_financial_analytics_service";

const GetMonthlyIncome = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyIncome: builder.query({
      query: (req: GetUserCategoryMonthlyIncomeRequest) => ({
        url: getMonthlyIncomeEndpoint(req),
      }),
      transformResponse: (response: GetUserCategoryMonthlyIncomeResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const getMonthlyIncomeEndpoint = (req: GetUserCategoryMonthlyIncomeRequest) => {
  let url = `/service/financials/analytics/monthly-income/user/${req.userId}`;

  if (req.personalFinanceCategoryPrimary) {
    url += `?personalFinanceCategoryPrimary=${req.personalFinanceCategoryPrimary}`;
  }

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

export { GetMonthlyIncome };
export const { useGetMonthlyIncomeQuery } = GetMonthlyIncome;
