import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMonthlyTransactionCountRequest,
  GetMonthlyTransactionCountResponse,
} from "src/types/request-response/get-monthly-transaction-count";

const GetMonthlyTransactionCount = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyTransactionCount: builder.query({
      query: (req: GetMonthlyTransactionCountRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetMonthlyTransactionCountResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result, error, arg) => [
        {
          type: "MONTHLY_TRANSACTION_COUNT",
          id: `user:${arg.userId} page:${arg.pageNumber} size:${arg.pageSize} month:${arg.month}`,
        },
      ],
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetMonthlyTransactionCountRequest) => {
  let url = `/service/financials/analytics/monthly-transaction-count/user/${req.userId}`;
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

export { GetMonthlyTransactionCount };
export const { useGetMonthlyTransactionCountQuery } =
  GetMonthlyTransactionCount;
