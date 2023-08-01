import { GetMelodyFinancialContextRequest } from "src/types/financials/request_response_financial_analytics_service";
import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";
import { GetMelodyFinancialContextResponse } from "src/types/response/GetMelodyFinancialContextResponse";

const GetFinancialContext = api.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialContext: builder.query({
      query: (req: GetMelodyFinancialContextRequest) => ({
        url: `/service/financials/analytics/melody-financial-context/user/${req.userId}`,
      }),
      transformResponse: (response: GetMelodyFinancialContextResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export { GetFinancialContext };
export const { useGetFinancialContextQuery } = GetFinancialContext;
