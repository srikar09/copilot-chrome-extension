import {
  GetMelodyFinancialContextRequest,
  GetMelodyFinancialContextResponse,
} from "src/types/request-response/get-financial-context";
import { api } from "../api/api";
import { processErrorIfPresent } from "src/lib/utils";

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
      providesTags: (result, error, arg) => {
        if (!result || !result.melodyFinancialContext) {
          return [];
        }

        return [
          {
            type: "FINANCIAL_CONTEXT",
            id: arg.userId,
          },
        ];
      },
    }),
  }),
  overrideExisting: false,
});

export { GetFinancialContext };
export const { useGetFinancialContextQuery } = GetFinancialContext;
