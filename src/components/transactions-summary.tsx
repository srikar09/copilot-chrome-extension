import React, { Dispatch, SetStateAction } from "react";

import { Virtuoso } from "react-virtuoso";
import { Transaction } from "src/types/financials/clickhouse_financial_service";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TransactionCard } from "./transaction-card";
import { Car } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";

interface MonthCardProps {
  month: string;
  transactions: Transaction[];
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export interface TransactionsByMonth {
  [month: string]: Transaction[];
}

interface TransactionsByDay {
  transactions: Transaction[];
  day: string;
}

interface TransactionsByMonthProps {
  transactionsByMonth: Map<string, Transaction[]>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
}

interface CategorySummaryProps {
  month: string;
  transactions: Transaction[];
}

type CategorySummary = {
  name: string;
  transactionsCount: number;
  totalSpent: number;
};

const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(dateString: string) {
  const suffixes = ["th", "st", "nd", "rd"];

  // Convert string to Date object
  const date = new Date(dateString);

  // Get day of the month
  const day = date.getDate();

  // Determine suffix
  let suffix = day < 30 ? suffixes[(day - 20) % 10] : suffixes[day % 10];
  if ((day > 3 && day < 21) || suffix === undefined) suffix = "th";
  if (day == 2) suffix = "nd";
  if (day == 3) suffix = "rd";

  // Format the date string
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let formatted = date.toLocaleString("en-US", options);

  // Add ordinal suffix to day of month
  formatted = formatted.replace(/\d+/, `${day}${suffix}`);

  return formatted;
}

const DayCard: React.FC<TransactionsByDay> = (
  transactionsByDay: TransactionsByDay
) => {
  const { transactions } = transactionsByDay;
  const formattedDate = formatDate(transactions[0].authorizedDate);
  return (
    <>
      <div>
        <p className="text-sm font-bold">{formattedDate} </p>
      </div>
      <div>
        {transactions.map((transaction, idx) => (
          <TransactionCard
            key={idx}
            transaction={transaction}
            enableSimpleView={true}
          />
        ))}
      </div>
    </>
  );
};

const MonthCard: React.FC<MonthCardProps> = ({
  month,
  transactions,
  setPageNumber,
  pageNumber,
}) => {
  const transactionsByDay = transactions.reduce((acc, transaction) => {
    const { authorizedDate } = transaction;
    const date = new Date(authorizedDate);
    const day = date.toLocaleString("en-US", { day: "2-digit" });

    if (acc.has(day)) {
      const arr = acc.get(day);
      if (arr) {
        arr.push(transaction);
        acc.set(day, arr);
      }
    } else {
      acc.set(day, [transaction]);
    }

    return acc;
  }, new Map<string, Transaction[]>());

  const sortedTransactionsByDay = Array.from(transactionsByDay).sort(
    ([dayA], [dayB]) => {
      return Number(dayB) - Number(dayA);
    }
  );

  return (
    <Car>
      <CardHeader>
        <CardTitle className="text-sm">{month}</CardTitle>
      </CardHeader>
      <CardContent>
        <CategorySummary
          key={month}
          month={month}
          transactions={transactions}
        />

        {/* Use Virtuoso for virtualized scrolling */}

        <InfiniteScroll
          dataLength={100}
          next={() => setPageNumber(pageNumber + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Virtuoso
            style={{ height: "400px" }} // adjust the height to fit your needs
            totalCount={sortedTransactionsByDay.length}
            itemContent={(index) => {
              const [day, dayTransactions] = sortedTransactionsByDay[index];
              return (
                <DayCard key={day} day={day} transactions={dayTransactions} />
              );
            }}
            endReached={() => setPageNumber(pageNumber + 1)}
          />
        </InfiniteScroll>

        {/* Removed original Array.map function for DayCard components */}
      </CardContent>
    </Car>
  );
};

function getCategoriesSummary(transactions: Transaction[]): CategorySummary[] {
  const categoryMap = new Map<string, CategorySummary>();

  transactions.forEach((transaction) => {
    const existingSummary = categoryMap.get(
      transaction.personalFinanceCategoryPrimary
    );

    if (existingSummary) {
      existingSummary.transactionsCount += 1;
      existingSummary.totalSpent += transaction.amount;
    } else {
      categoryMap.set(transaction.personalFinanceCategoryPrimary, {
        name: transaction.personalFinanceCategoryPrimary,
        transactionsCount: 1,
        totalSpent: transaction.amount,
      });
    }
  });

  return Array.from(categoryMap.values());
}
//need to update category summary
const CategorySummary: React.FC<CategorySummaryProps> = ({
  month,
  transactions,
}) => {
  const categories = getCategoriesSummary(transactions);
  const totalSpent = categories.reduce(
    (acc, category) => acc + category.totalSpent,
    0
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Monthly Summary ({month})</CardTitle>
        <div className="flex flex-row">
          <div>
            <p
              className="text-xs font-bold text-black"
              style={{
                fontSize: "12px",
              }}
            >
              Total Spent
            </p>
            <p
              className="text-xs"
              style={{
                fontSize: "12px",
              }}
            >
              ${totalSpent.toFixed(2)}
            </p>
          </div>
          <div>
            <p
              className="text-xs font-bold text-black"
              style={{
                fontSize: "12px",
              }}
            >
              Spent Across
            </p>
            <p
              className="text-xs"
              style={{
                fontSize: "12px",
              }}
            >
              {" "}
              {categories.length} Categories
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex flex-col py-2">
                  <Badge className="text-xs font-bold w-[40%] bg-black">
                    {category.name}
                  </Badge>
                  <Badge
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {category.transactionsCount} transactions totalling $
                    {category.totalSpent.toFixed(2)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const TransactionsByMonthComponent: React.FC<TransactionsByMonthProps> = ({
  transactionsByMonth,
  setPageNumber,
  pageNumber,
}) => {
  return (
    <div>
      {Array.from(transactionsByMonth)
        .sort(([dateA], [dateB]) => {
          const [monthNameA, yearA] = dateA.split(" ");
          const [monthNameB, yearB] = dateB.split(" ");
          if (yearA !== yearB) {
            return Number(yearB) - Number(yearA);
          }
          return (
            monthOrder.indexOf(monthNameB) - monthOrder.indexOf(monthNameA)
          );
        })
        .map(([month, transactions]) => (
          <>
            <MonthCard
              key={month}
              month={month}
              transactions={transactions}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
            />
          </>
        ))}
    </div>
  );
};

export default TransactionsByMonthComponent;
