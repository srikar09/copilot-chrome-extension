import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMerchantMonthlyExpenditureRequest,
  GetMerchantMonthlyExpenditureResponse,
} from "src/types/request-response/get-merchant-monthly-expenditure";

const GetMerchantMonthlyExpenses = api.injectEndpoints({
  endpoints: (builder) => ({
    getMerchantMonthlyExpenses: builder.query({
      query: (req: GetMerchantMonthlyExpenditureRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetMerchantMonthlyExpenditureResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetMerchantMonthlyExpenditureRequest) => {
  let url = `/service/financials/analytics/merchant-monthly-expenditure/user/${req.userId}`;
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

export { GetMerchantMonthlyExpenses };
export const { useGetMerchantMonthlyExpensesQuery } =
  GetMerchantMonthlyExpenses;
