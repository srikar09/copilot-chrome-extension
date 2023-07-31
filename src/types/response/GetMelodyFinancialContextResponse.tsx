import { ErrorResponse } from "../error/error";
import { MelodyFinancialContext } from "../financials/clickhouse_financial_service";

export class GetMelodyFinancialContextResponse extends ErrorResponse {
  melodyFinancialContext: MelodyFinancialContext | undefined;

  constructor(data: Partial<GetMelodyFinancialContextResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
