import React from "react";
import { Card } from "./ui/card";
import { Transaction } from "src/types/financials/clickhouse_financial_service";
import { CategoryComponent, sanitizeCategory } from "./categories";
import { roundToTwoDecimalPlaces, timeAgo } from "src/lib/utils";

interface TransactionCardProps {
  transaction: Transaction;
  enableSimpleView?: boolean;
}
function shortenIfTooLong(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.substr(0, maxLength) + "..";
  }
  return str;
}

const TransactionCard: React.FC<TransactionCardProps> = (props) => {
  const { transaction, enableSimpleView } = props;
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Card onClick={() => setOpenModal(true)} className="p-2">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="pt-2">
              <CategoryComponent
                categoryName={transaction.personalFinanceCategoryPrimary}
                showDescriptor={false}
                className="w-8 h-8 px-2 bg-black text-white rounded-2xl"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <div>
                  <p className="text-xs font-bold text-black">
                    {shortenIfTooLong(transaction.name, 13)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold">
                    {sanitizeCategory(
                      transaction.personalFinanceCategoryPrimary
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div>
                  <p className="text-xs font-semibold text-black">
                    <span
                      className={
                        transaction.amount > 0
                          ? "text-green-700 pr-1"
                          : "text-red-700 pr-1"
                      }
                    >
                      {transaction.amount > 0 ? "-" : "+"}
                    </span>
                    $
                    {roundToTwoDecimalPlaces(
                      transaction.amount < 0
                        ? -1 * transaction.amount
                        : transaction.amount
                    )}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-gray-600"
                    style={{
                      fontSize: "8px",
                    }}
                  >
                    {timeAgo(new Date(transaction.authorizedDate))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export { TransactionCard };
