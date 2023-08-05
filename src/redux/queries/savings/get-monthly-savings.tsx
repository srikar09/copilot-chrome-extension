import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetMonthlySavingsRequest,
  GetMonthlySavingsResponse,
} from "src/types/request-response/get-monthly-savings";

const GetMonthlySavings = api.injectEndpoints({
  endpoints: (builder) => ({
    getMonthlySavings: builder.query({
      query: (req: GetMonthlySavingsRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetMonthlySavingsResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

const buildEndpoint = (req: GetMonthlySavingsRequest) => {
  let url = `/service/financials/analytics/monthly-savings/user/${req.userId}`;
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

export { GetMonthlySavings };
export const { useGetMonthlySavingsQuery } = GetMonthlySavings;
