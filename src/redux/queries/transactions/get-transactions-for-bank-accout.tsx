import { processErrorIfPresent } from "src/lib/utils";
import { api } from "src/redux/api/api";
import {
  GetTransactionsForBankAccountRequest,
  GetTransactionsForBankAccountResponse,
} from "src/types/request-response/get-transactions-for-bank-account";

const GetTransactionsForBankAccount = api.injectEndpoints({
  endpoints: (builder) => ({
    getTransactionsForBankAccount: builder.query({
      query: (req: GetTransactionsForBankAccountRequest) => ({
        url: `/service/financials/analytics/transactions/user/${req.userId}/plaidAccountId/${req.plaidAccountId}/pageNumber/${req.pageNumber}/pageSize/${req.pageSize}`,
      }),
      transformResponse: (response: GetTransactionsForBankAccountResponse) => {
        processErrorIfPresent(response.error_message);
        return response;
      },
      providesTags: (result, error, arg) => [
        {
          type: "BANK_ACCOUNT_TRANSACTIONS",
          id: `plaidAccountId:${arg.plaidAccountId}}`,
        },
      ],
    }),
  }),
  overrideExisting: false,
});

export { GetTransactionsForBankAccount };

export const { useGetTransactionsForBankAccountQuery } =
  GetTransactionsForBankAccount;
