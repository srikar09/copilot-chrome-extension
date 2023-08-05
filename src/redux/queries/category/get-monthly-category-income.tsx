import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMonthlyIncomeRequest,
  GetMonthlyIncomeResponse,
} from "src/types/request-response/get-monthly-income";

const GetMonthlyIncome = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlyIncome: builder.query({
      query: (req: GetMonthlyIncomeRequest) => ({
        url: getMonthlyIncomeEndpoint(req),
      }),
      transformResponse: (response: GetMonthlyIncomeResponse) => {
        console.log("response", response);
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const getMonthlyIncomeEndpoint = (req: GetMonthlyIncomeRequest) => {
  let url = `/service/financials/analytics/monthly-income/user/${req.userId}`;

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
