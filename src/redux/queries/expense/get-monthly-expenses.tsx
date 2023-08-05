import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMonthlyExpenditureRequest,
  GetMonthlyExpenditureResponse,
} from "src/types/request-response/get-monthly-expenditure";

const GetMonthlyExpenses = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyExpenses: builder.query({
      query: (req: GetMonthlyExpenditureRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetMonthlyExpenditureResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetMonthlyExpenditureRequest) => {
  let url = `/service/financials/analytics/monthly-expenditure/user/${req.userId}`;
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

export { GetMonthlyExpenses };
export const { useGetMonthlyExpensesQuery } = GetMonthlyExpenses;
