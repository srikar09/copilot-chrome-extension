import { ErrorResponse } from "../error/error";
import { CategoryMonthlyIncome } from "../financials/clickhouse_financial_service";

/**
 * Represents the request for getting user category monthly income.
 */
class GetUserCategoryMonthlyIncomeRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The primary personal finance category for filtering the records.
   */
  personalFinanceCategoryPrimary: string;

  /**
   * The month for which category monthly income is requested (in the format YYYYMM).
   */
  month: number;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetUserCategoryMonthlyIncomeRequest.
   * @param partialRequest Partial request object to initialize the GetUserCategoryMonthlyIncomeRequest.
   * @remarks You can use this constructor to create a partial instance of GetUserCategoryMonthlyIncomeRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetUserCategoryMonthlyIncomeRequest>) {
    this.userId = partialRequest.userId || 0;
    this.personalFinanceCategoryPrimary =
      partialRequest.personalFinanceCategoryPrimary || "";
    this.month = partialRequest.month || 0;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

class GetUserCategoryMonthlyIncomeResponse extends ErrorResponse {
  categoryMonthlyIncome: CategoryMonthlyIncome[] = [];
  nextPageNumber: number = 0;

  constructor(data?: Partial<GetUserCategoryMonthlyIncomeResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export {
  GetUserCategoryMonthlyIncomeRequest,
  GetUserCategoryMonthlyIncomeResponse,
};
