import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetFinancialProfileRequest,
  GetFinancialProfileResponse,
} from "src/types/request-response/get-financial-profile";

const GetFinancialProfile = api.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialProfile: builder.query({
      query: (req: GetFinancialProfileRequest) => ({
        url: buildEndpoint(req),
      }),
      transformResponse: (response: GetFinancialProfileResponse) => {
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

const buildEndpoint = (req: GetFinancialProfileRequest) => {
  let url = `/service/financials/analytics/finance-profile/user/${req.userId}`;

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

export { GetFinancialProfile };
export const { useGetFinancialProfileQuery } = GetFinancialProfile;
