import { ErrorResponse } from "../error/error";
import { Transaction } from "../financials/clickhouse_financial_service";

export class GetTransactionsResponse extends ErrorResponse {
  nextPageNumber: number | undefined;
  transactions: Transaction[] | undefined;

  constructor(data: Partial<GetTransactionsResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
