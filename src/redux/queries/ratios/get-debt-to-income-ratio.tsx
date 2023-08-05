// /v1/gateway/service/financials/analytics/debt-to-income-ratio/user/{{userID}}?pageNumber={{pageNumber}}&pageSize={{pageSize}}&month={{month}}

import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetDebtToIncomeRatioRequest,
  GetDebtToIncomeRatioResponse,
} from "src/types/request-response/get-debt-to-income-ratio";

const GetDebtToIncomeRatio = api.injectEndpoints({
  endpoints: (builder) => ({
    getDebtToIncomeRatio: builder.query({
      query: (req: GetDebtToIncomeRatioRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetDebtToIncomeRatioResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result, error, arg) => [
        {
          type: "FINANCIAL_PROFILE",
          id: `user:${arg.userId} page:${arg.pageNumber} size:${arg.pageSize} month:${arg.month}`,
        },
      ],
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetDebtToIncomeRatioRequest) => {
  let url = `/service/financials/analytics/debt-to-income-ratio/user/${req.userId}`;

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

export { GetDebtToIncomeRatio };
export const { useGetDebtToIncomeRatioQuery } = GetDebtToIncomeRatio;
