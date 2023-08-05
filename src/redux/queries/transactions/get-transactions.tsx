import { api } from "../../api/api";
import { processErrorIfPresent } from "src/lib/utils";
import {
  GetTransactionsRequest,
  GetTransactionsResponse,
} from "src/types/request-response/get-transactions";

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
