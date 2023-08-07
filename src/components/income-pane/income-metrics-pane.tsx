import { useEffect, useState } from "react";
import { useGetIncomeMetricsQuery } from "src/redux/queries/income/get-income-metrics";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { IncomeMetrics } from "src/types/financials/clickhouse_financial_service";
import { GetIncomeMetricsRequest } from "src/types/request-response/get-income-metrics";
import { Spinner } from "../spinner";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CardinalAreaChart } from "../category-monthly-income-card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Monthly Transactions
function totalTransactionsPerMonthHelper(
  data: Array<any>,
  month: number
): number {
  return data
    .filter((d) => d.month === month)
    .reduce((acc, curr) => acc + curr.transactionCount, 0);
}

// Income Analysis
function totalIncomePerMonth(data: Array<any>, month: number): number {
  return data
    .filter((d) => d.month === month)
    .reduce((acc, curr) => acc + curr.totalIncome, 0);
}

// Finance Category Analysis
function transactionsPerCategory(data: Array<any>, category: string): number {
  return data
    .filter((d) => d.personalFinanceCategoryPrimary === category)
    .reduce((acc, curr) => acc + curr.transactionCount, 0);
}

// User Behavior
function transactionsPerUser(data: Array<any>, userId: number): number {
  return data
    .filter((d) => d.userId === userId)
    .reduce((acc, curr) => acc + curr.transactionCount, 0);
}

function incomePerUser(data: Array<any>, userId: number): number {
  return data
    .filter((d) => d.userId === userId)
    .reduce((acc, curr) => acc + curr.totalIncome, 0);
}

// Top Personal Finance Categories
function topCategories(data: Array<any>): any {
  const categoriesCount: { [key: string]: number } = {};

  data.forEach((d) => {
    if (!categoriesCount[d.personalFinanceCategoryPrimary]) {
      categoriesCount[d.personalFinanceCategoryPrimary] = 0;
    }
    categoriesCount[d.personalFinanceCategoryPrimary] += d.transactionCount;
  });

  let maxCount = 0;
  let maxCategory = "";
  for (const category in categoriesCount) {
    if (categoriesCount[category] > maxCount) {
      maxCount = categoriesCount[category];
      maxCategory = category;
    }
  }

  return { category: maxCategory, count: maxCount };
}

// Pearson's correlation coefficient as the measure of correlation. This value lies
// between -1 and 1, where a value close to 1 indicates a strong positive correlation,
// a value close to -1 indicates a strong negative correlation, and a value close to
// 0 indicates no correlation.
function calculateCorrelation(data: Array<any>): number {
  let months = Array.from(new Set(data.map((d) => d.month))).sort();

  let totalIncomesPerMonth: number[] = months.map((month) =>
    totalIncomePerMonth(data, month)
  );
  let totalTransactionsPerMonth: number[] = months.map((month) =>
    totalTransactionsPerMonthHelper(data, month)
  );

  let meanIncome =
    totalIncomesPerMonth.reduce((a, b) => a + b, 0) /
    totalIncomesPerMonth.length;
  let meanTransactions =
    totalTransactionsPerMonth.reduce((a, b) => a + b, 0) /
    totalTransactionsPerMonth.length;

  let deviationsIncome = totalIncomesPerMonth.map(
    (income) => income - meanIncome
  );
  let deviationsTransactions = totalTransactionsPerMonth.map(
    (transactions) => transactions - meanTransactions
  );

  let numerator = deviationsIncome
    .map((deviation, index) => deviation * deviationsTransactions[index])
    .reduce((a, b) => a + b, 0);

  let denominator =
    Math.sqrt(
      deviationsIncome
        .map((deviation) => deviation ** 2)
        .reduce((a, b) => a + b, 0)
    ) *
    Math.sqrt(
      deviationsTransactions
        .map((deviation) => deviation ** 2)
        .reduce((a, b) => a + b, 0)
    );

  return numerator / denominator;
}

const IncomeMetricsPane: React.FC = () => {
  const currentUserId = useAppSelector(selectCurrentUserID);
  const [incomeMetrics, setIncomeMetrics] = useState<IncomeMetrics[]>([]);
  const [pageSize, setPageSize] = useState<number>(50);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const request = new GetIncomeMetricsRequest({
    userId: Number(currentUserId),
    pageNumber: pageNumber,
    pageSize: pageSize,
  });

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetIncomeMetricsQuery(request);

  useEffect(() => {
    if (isSuccess && response.incomeMetrics) {
      setIncomeMetrics(response.incomeMetrics);
    }
  }, [isSuccess, response]);

  let spinner = <Spinner className={"w-8 h-8 mt-3 ml-3"} />;

  if (isSuccess && response.incomeMetrics) {
    spinner = <></>;
  } else if (isError) {
    spinner = <div>{error.toString()}</div>;
  } else if (
    isSuccess &&
    (response.incomeMetrics?.length == 0 || response.incomeMetrics == undefined)
  ) {
    spinner = (
      <Card className="py-2">
        <CardHeader>
          <CardTitle>We are still pulling in your data!</CardTitle>
          <p>Sit tight and relax. We are still pulling in your data </p>
        </CardHeader>
      </Card>
    );
  }

  //   compute number of transactions per category across all income metrics
  const categoryTransactionCount = incomeMetrics.reduce((acc, incomeMetric) => {
    const category = incomeMetric.personalFinanceCategoryPrimary;
    const transactionCount = incomeMetric.transactionCount;
    if (acc[category]) {
      acc[category] += transactionCount;
    } else {
      acc[category] = transactionCount;
    }
    return acc;
  }, {} as { [key: string]: number });

  return (
    <>
      {spinner}
      <div className="grid grid-cols-2 gap-3">
        <div className="py-3">
          <CardinalAreaChart
            data={incomeMetrics}
            xAxisDataKey="month"
            yAxisDataKey="totalIncome"
            title="Monthly Income"
          />
        </div>
        <div className="py-3">
          <CardinalAreaChart
            data={incomeMetrics}
            xAxisDataKey="personalFinanceCategoryPrimary"
            yAxisDataKey="transactionCount"
            title="Transactions Across Categories"
          />
        </div>
      </div>
      <Card className="p-5">
        <CardHeader>
          <CardTitle>
            Transaction Count vs Total Monthly Income Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              className="w-full"
              data={incomeMetrics}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="transactionCount"
                stroke="#000000"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="totalIncome"
                stroke="#000000"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
};

export { IncomeMetricsPane };
