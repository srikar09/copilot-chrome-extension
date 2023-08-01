import { GetTransactionsRequest } from "src/types/financials/request_response_financial_service";
import { api } from "../../api/api";
import { GetTransactionsResponse } from "src/types/custom/get-transactions-request";
import { processErrorIfPresent } from "src/lib/utils";

const GetTransactions = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (req: GetTransactionsRequest) => ({
        url: `/service/financials/transactions/${req.userId}/pageNumber/${req.pageNumber}/pageSize/${req.pageSize}`,
      }),
      transformResponse: (response: GetTransactionsResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result) =>
        result && result.transactions
          ? result.transactions.map((transaction) => ({
              type: "TRANSACTION",
              id: transaction.transactionId,
            }))
          : [],
    }),
  }),
  overrideExisting: false,
});

export { GetTransactions };
export const { useGetTransactionsQuery } = GetTransactions;
