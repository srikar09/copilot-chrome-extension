import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetIncomeExpenseRatioRequest,
  GetIncomeExpenseRatioResponse,
} from "src/types/request-response/get-income-expense-ratio";

const GetIncomeExpenseRatio = api.injectEndpoints({
  endpoints: (builder) => ({
    getIncomeExpenseRatio: builder.query({
      query: (req: GetIncomeExpenseRatioRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetIncomeExpenseRatioResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result, error, arg) => [
        {
          type: "INCOME_EXPENSE_RATIO",
          id: `user:${arg.userId} page:${arg.pageNumber} size:${arg.pageSize} month:${arg.month}`,
        },
      ],
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetIncomeExpenseRatioRequest) => {
  let url = `/service/financials/analytics/income-expense-ratio/user/${req.userId}`;

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

export { GetIncomeExpenseRatio };
export const { useGetIncomeExpenseRatioQuery } = GetIncomeExpenseRatio;
