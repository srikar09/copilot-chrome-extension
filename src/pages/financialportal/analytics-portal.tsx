import { useEffect, useState } from "react";
import { ResponsiveContainer, Pie, PieChart } from "recharts";
import { CardinalAreaChart } from "src/components/category-monthly-income-card";
import { Spinner } from "src/components/spinner";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import {
  selectCurrentUserID,
  selectUserFinancialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import {
  CategoryMonthlyExpenditure,
  MonthlyIncome,
} from "src/types/financials/clickhouse_financial_service";
import { useGetMonthlyCategoryExpenditureQuery } from "src/redux/queries/category/get-monthly-category-expenditure";
import { MonthlyIncomeMetricsCard } from "./income/income-metrics-page";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { GetUserCategoryMonthlyExpenditureRequest } from "src/types/request-response/get-user-category-monthly-expenditure";
import { IncomeMetricsPane } from "src/components/income-pane/income-metrics-pane";

/**
 * Enum representing different types of analytics available in the portal.
 */
enum AnalyticType {
  INCOME = "INCOME",
  EXPENDITURE = "EXPENDITURE",
  SAVINGS = "SAVINGS",
  INVESTMENTS = "INVESTMENTS",
  CREDIT = "CREDIT",
  NET_WORTH = "NET_WORTH",
  DEBT = "DEBT",
}

/**
 * The main analytics portal component that renders different analytics tabs.
 */
const AnalyticsPortal = () => {
  const userId = useAppSelector(selectCurrentUserID);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(100);
  const [month, setMonth] = useState<number>(202307);
  const [monthlyIncome, setMonthlyIncome] = useState<MonthlyIncome[]>([]);

  return (
    <div>
      <Tabs defaultValue={AnalyticType.INCOME}>
        <TabsList className="m-1 bg-black">
          <TabsTrigger value={AnalyticType.INCOME}>Income</TabsTrigger>
          <TabsTrigger value={AnalyticType.EXPENDITURE}>Expenses</TabsTrigger>
          <TabsTrigger value={AnalyticType.SAVINGS}>Savings</TabsTrigger>
          <TabsTrigger value={AnalyticType.INVESTMENTS}>
            Investments
          </TabsTrigger>
          <TabsTrigger value={AnalyticType.CREDIT}>Credit</TabsTrigger>
          <TabsTrigger value={AnalyticType.NET_WORTH}>Net Worth</TabsTrigger>
          <TabsTrigger value={AnalyticType.DEBT}>Debt</TabsTrigger>
        </TabsList>
        <TabsContent value={AnalyticType.INCOME}>
          <MonthlyIncomeMetricsCard />
        </TabsContent>
        <TabsContent value={AnalyticType.EXPENDITURE}>
          <MonthlyCategorizedIncomeMetricsCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

/**
 * Component displaying monthly categorized income metrics.
 */
const MonthlyCategorizedIncomeMetricsCard = () => {
  const userId = useAppSelector(selectCurrentUserID);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const [month, setMonth] = useState<number>(202307);
  const [categoryMonthlyExpenditure, setCategoryMonthlyExpenditures] = useState<
    CategoryMonthlyExpenditure[]
  >([]);

  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );

  // pull monthly income
  const req = new GetUserCategoryMonthlyExpenditureRequest({
    userId: Number(userId),
    pageNumber: pageNumber,
    pageSize: pageSize,
  });
  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMonthlyCategoryExpenditureQuery(req);

  // pull monthly across categories

  const getMetric = () => {
    if (isSuccess && response.categoryMonthlyExpenditure) {
      setSpinner(null);

      // convert all negative values to positive
      const categoryMonthlyExpenditure =
        response.categoryMonthlyExpenditure.map(
          (categoryMonthlyExpenditure: CategoryMonthlyExpenditure) => {
            return {
              ...categoryMonthlyExpenditure,
              totalSpending: Math.abs(categoryMonthlyExpenditure.totalSpending),
            };
          }
        );

      setCategoryMonthlyExpenditures(categoryMonthlyExpenditure);
    } else if (isLoading) {
      setSpinner(<Spinner className={"w-8 h-8 mt-3 ml-3"} />);
    } else if (isError) {
      setSpinner(<div>{error.toString()}</div>);
    } else if (
      isSuccess &&
      (response.categoryMonthlyExpenditure?.length == 0 ||
        response.categoryMonthlyExpenditure == undefined)
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

  const sampleQuestions: string[] = [
    "What were my total expenditures last month",
    "What categories do my expenses fall into?",
    "Are there any unusual or unexpected expenditures on my account?",
    "How much am I spending on non-essentials?",
  ];

  return (
    <AskMelodiyAILayout
      context={categoryMonthlyExpenditure}
      sampleQuestions={sampleQuestions}
    >
      {spinner}
      <h2 className="ml-5 text-xl font-bold tracking-tight">
        Monthly Expenditures <span className="ml-1 text-xs"> </span>
      </h2>
      <CardinalAreaChart
        data={categoryMonthlyExpenditure}
        xAxisDataKey="month"
        yAxisDataKey="totalSpending"
        title="Monthly Expenditures"
      />

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="totalSpending"
            startAngle={180}
            endAngle={0}
            data={categoryMonthlyExpenditure}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </AskMelodiyAILayout>
  );
};

export { AnalyticsPortal };
