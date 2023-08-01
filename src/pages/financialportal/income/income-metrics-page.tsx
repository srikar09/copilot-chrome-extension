import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CardinalAreaChart } from "src/components/category-monthly-income-card";
import { Spinner } from "src/components/spinner";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { convertToMonth, roundToTwoDecimalPlaces } from "src/lib/utils";
import { useGetMonthlyIncomeQuery } from "src/redux/queries/category/get-monthly-income";
import {
  selectCurrentUserID,
  selectUserFinancialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { MonthlyIncome } from "src/types/financials/clickhouse_financial_service";
import { GetUserCategoryMonthlyIncomeRequest } from "src/types/financials/request_response_financial_analytics_service";

const MonthlyIncomeMetricsCard = () => {
  const userId = useAppSelector(selectCurrentUserID);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(200);
  const [month, setMonth] = useState<number>(202307);
  const [monthlyIncome, setMonthlyIncome] = useState<MonthlyIncome[]>([]);

  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );

  // pull monthly income
  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMonthlyIncomeQuery(
    GetUserCategoryMonthlyIncomeRequest.create({
      userId: Number(userId),
      pageNumber: pageNumber,
      pageSize: pageSize,
    })
  );

  const getMetric = () => {
    if (isSuccess && response.monthlyIncomes) {
      setSpinner(null);
      setMonthlyIncome(response.monthlyIncomes);
    } else if (isLoading) {
      setSpinner(<Spinner className={"w-8 h-8 mt-3 ml-3"} />);
    } else if (isError) {
      setSpinner(<div>{error.toString()}</div>);
    } else if (
      isSuccess &&
      (response.monthlyIncomes?.length == 0 ||
        response.monthlyIncomes == undefined)
    ) {
      setSpinner(
        <Card className="py-2">
          <CardHeader>
            <CardTitle>We are still pulling in your data!</CardTitle>
            <p>Sit tight and relax. We are still pulling in your data </p>
          </CardHeader>
        </Card>
      );
    }
  };

  useEffect(() => {
    getMetric();
  }, [isLoading, isError, response]);

  return (
    <div>
      {spinner}
      <h2 className="ml-5 text-xl font-bold tracking-tight">
        Income Metrics <span className="ml-1 text-xs"> </span>
      </h2>
      {monthlyIncome.length > 0 && (
        <>
          <MonthlyIncomeMetricsSummaryCard monthlyIncome={monthlyIncome} />
          <MonthlyIncomeMetricSeriesSummaryCard monthlyIncome={monthlyIncome} />
        </>
      )}
    </div>
  );
};

const MonthlyIncomeMetricsSummaryCard: React.FC<{
  monthlyIncome: MonthlyIncome[];
}> = (props) => {
  const { monthlyIncome } = props;
  const maxMonthlyIncome = getMaxMonthlyIncome(monthlyIncome);
  const averageMonthlyIncome = getAverageMonthlyIncome(monthlyIncome);
  const monthWithMaxIncome = getMonthWithMaxIncome(monthlyIncome);
  const monthWithMinIncome = getMonthWithMinIncome(monthlyIncome);
  const incomeTrend = getIncomeTrend(monthlyIncome);
  const incomeGrowthRate = getIncomeGrowthRate(monthlyIncome);
  const numMonthsIncomeAbove = getNumMonthsIncomeAbove(
    monthlyIncome,
    averageMonthlyIncome
  );
  const totalIncome = getTotalIncome(monthlyIncome);
  const totalIncomeForYear = getTotalIncomeForYear(monthlyIncome, 2023);

  return (
    <div className="py-3 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {/** max maonthly income */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {roundToTwoDecimalPlaces(averageMonthlyIncome)} earned on
            average/month
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${roundToTwoDecimalPlaces(totalIncome)}
            <span
              className="ml-2 unde"
              style={{
                fontSize: "12px",
              }}
            >
              {" "}
              total income
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="font-bold"> {numMonthsIncomeAbove} </span> months
            above average income
          </p>
          <p className="text-xs text-muted-foreground font-bold">
            <span
              className="font-bold"
              style={{
                color: incomeGrowthRate > 0 ? "green" : "red",
              }}
            >
              +
            </span>
            {incomeGrowthRate}% growth rate
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
        <CardContent>
          <div className="py-4 flex items-center">
            <p className="font-bold">
              {maxMonthlyIncome}{" "}
              <span
                className="font-base"
                style={{
                  fontSize: "8px",
                }}
              >
                {" "}
                max monthly income
              </span>
            </p>
          </div>
          <div className="text-2xl font-bold">
            ${roundToTwoDecimalPlaces(totalIncomeForYear)}
            <span
              className="ml-2"
              style={{
                fontSize: "12px",
              }}
            >
              {" "}
              2023 total
            </span>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-xs text-muted-foreground">
              month with highest income{" "}
              <span className="font-bold">
                {" "}
                {convertToMonth(monthWithMaxIncome.toString())}{" "}
              </span>{" "}
            </p>
            <p className="text-xs text-muted-foreground">
              month with lowerst income{" "}
              <span className="font-bold">
                {" "}
                {convertToMonth(monthWithMinIncome.toString())}{" "}
              </span>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MonthlyIncomeMetricSeriesSummaryCard: React.FC<{
  monthlyIncome: MonthlyIncome[];
}> = (props) => {
  const { monthlyIncome } = props;
  const userYearlyIncome = yearlyIncome(monthlyIncome);
  const userCumulativeIncome = cumulativeIncome(monthlyIncome);
  const userMovingAverage = movingAverage(monthlyIncome);
  const userIncomeGrowthRate = incomeGrowthRate(monthlyIncome);

  return (
    <Tabs defaultValue="account" className="py-5 w-full">
      <TabsList className="grid w-full grid-cols-3 rounded-xl border my-2 p-3 font-bold">
        <TabsTrigger value="monthly-income">Monthly Income</TabsTrigger>
        <TabsTrigger value="account">Moving Average</TabsTrigger>
        <TabsTrigger value="password">Growth Rate</TabsTrigger>
      </TabsList>
      <TabsContent value="monthly-income">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when youre done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardinalAreaChart
              data={monthlyIncome}
              xAxisDataKey="month"
              yAxisDataKey="totalIncome"
              title="Monthly Income"
            />
          </CardContent>
          <CardFooter>
            <p>
              {" "}
              Note: these metrics are computed directly from your financial
              transactions
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income Moving Average</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when youre done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardinalAreaChart
              data={userMovingAverage}
              xAxisDataKey="month"
              yAxisDataKey="totalIncome"
              title="Monthly Income Moving Average"
            />
          </CardContent>
          <CardFooter>
            <p>
              {" "}
              Note: these metrics are computed directly from your financial
              transactions
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income Growth Rate</CardTitle>
            <CardDescription>Monthly Income Growth Rate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardinalAreaChart
              data={userIncomeGrowthRate}
              xAxisDataKey="month"
              yAxisDataKey="growthRate"
              title="Monthly Income Growth Rate"
            />
          </CardContent>
          <CardFooter>
            <p>
              {" "}
              Note: these metrics are computed directly from your financial
              transactions
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

function getTotalIncomeForYear(incomes: any[], year: number): number {
  let total = 0;
  for (let income of incomes) {
    if (Math.floor(income.month / 100) === year) {
      total += income.totalIncome;
    }
  }
  return roundToTwoDecimalPlaces(total);
}

function getNumMonthsIncomeAbove(incomes: any[], value: number): number {
  let count = 0;
  for (let income of incomes) {
    if (income.totalIncome > value) {
      count++;
    }
  }
  return roundToTwoDecimalPlaces(count);
}

function getIncomeGrowthRate(incomes: any[]): number {
  let firstMonthIncome = incomes[incomes.length - 1].totalIncome;
  let lastMonthIncome = incomes[0].totalIncome;
  let growthRate = (lastMonthIncome - firstMonthIncome) / firstMonthIncome;
  return roundToTwoDecimalPlaces(growthRate);
}

function getMonthWithMinIncome(incomes: any[]): number {
  let minIncome = incomes[0].totalIncome;
  let month = incomes[0].month;
  for (let income of incomes) {
    if (income.totalIncome < minIncome) {
      minIncome = income.totalIncome;
      month = income.month;
    }
  }
  return month;
}

function getIncomeTrend(incomes: any[]): string[] {
  let trend: string[] = [];
  for (let i = 1; i < incomes.length; i++) {
    if (incomes[i].totalIncome > incomes[i - 1].totalIncome) {
      trend.push("Positive");
    } else {
      trend.push("Negative");
    }
  }
  return trend;
}

function getMonthWithMaxIncome(incomes: any[]): number {
  let maxIncome = incomes[0].totalIncome;
  let month = incomes[0].month;
  for (let income of incomes) {
    if (income.totalIncome > maxIncome) {
      maxIncome = income.totalIncome;
      month = income.month;
    }
  }
  return month;
}

function getMaxMonthlyIncome(incomes: any[]): number {
  let maxIncome = incomes[0].totalIncome;
  for (let income of incomes) {
    if (income.totalIncome > maxIncome) {
      maxIncome = income.totalIncome;
    }
  }
  return roundToTwoDecimalPlaces(maxIncome);
}

function getAverageMonthlyIncome(incomes: any[]): number {
  let total = getTotalIncome(incomes);
  let average = total / incomes.length;
  return roundToTwoDecimalPlaces(average);
}

function getTotalIncome(incomes: any[]): number {
  let total = 0;
  for (let income of incomes) {
    total += income.totalIncome;
  }
  return roundToTwoDecimalPlaces(total);
}

const monthlyIncome = (data: MonthlyIncome[]) =>
  data.map((item) => ({ month: item.month, totalIncome: item.totalIncome }));

const yearlyIncome = (data: MonthlyIncome[]) => {
  const yearlyIncome: { [key: number]: number } = {};
  data.forEach((item) => {
    const year = Math.floor(item.month / 100);
    yearlyIncome[year] = (yearlyIncome[year] || 0) + item.totalIncome;
  });
  return yearlyIncome;
};

const cumulativeIncome = (data: MonthlyIncome[]) => {
  let total = 0;
  return data.map((item) => {
    total += item.totalIncome;
    return { month: item.month, totalIncome: total };
  });
};

const movingAverage = (data: MonthlyIncome[], period = 3) => {
  let result = [];
  for (let i = 0; i < data.length - period + 1; i++) {
    let total = 0;
    for (let j = 0; j < period; j++) {
      total += data[i + j].totalIncome;
    }
    result.push({
      month: data[i + period - 1].month,
      totalIncome: total / period,
    });
  }
  return result;
};

const incomeGrowthRate = (data: MonthlyIncome[]) => {
  let result = [];
  for (let i = 1; i < data.length; i++) {
    const growthRate =
      (data[i].totalIncome - data[i - 1].totalIncome) / data[i - 1].totalIncome;
    result.push({ month: data[i].month, growthRate: growthRate });
  }
  return result;
};

export { MonthlyIncomeMetricsCard };