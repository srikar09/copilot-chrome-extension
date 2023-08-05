import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMerchantMonthlyExpenditureRequest,
  GetMerchantMonthlyExpenditureResponse,
} from "src/types/request-response/get-merchant-monthly-expenditure";
import {
  GetPaymentChannelMonthlyExpenditureRequest,
  GetPaymentChannelMonthlyExpenditureResponse,
} from "src/types/request-response/get-payment-channel-monthly-expenditure";

const GetPaymentChannelExpenses = api.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentChannelMonthlyExpenses: builder.query({
      query: (req: GetPaymentChannelMonthlyExpenditureRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (
        response: GetPaymentChannelMonthlyExpenditureResponse
      ) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetPaymentChannelMonthlyExpenditureRequest) => {
  let url = `/service/financials/analytics/payment-channel-monthly-expenditure/user/${req.userId}`;
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

export { GetPaymentChannelExpenses };
export const { useGetPaymentChannelMonthlyExpensesQuery } =
  GetPaymentChannelExpenses;
