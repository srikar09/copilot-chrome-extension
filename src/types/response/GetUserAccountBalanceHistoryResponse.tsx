import { ErrorResponse } from "../error/error";
import { AccountBalanceHistory } from "../financials/clickhouse_financial_service";

export class GetUserAccountBalanceHistoryResponse extends ErrorResponse {
  accountBalanceHistory: AccountBalanceHistory[] = [];

  constructor(data?: Partial<GetUserAccountBalanceHistoryResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
