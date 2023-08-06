import react from "react";
import {
  InvesmentHolding,
  InvestmentAccount,
  InvestmentSecurity,
} from "src/types/financials/message_financial_service";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { formatToTwoDecimalPoints } from "src/lib/utils";
import { SecurityCard } from "./security-card";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

// holding card should display all holdings for a given investment account
const HoldingCard: React.FC<{
  Account: InvestmentAccount;
}> = ({ Account }) => {
  const [selectedHolding, setSelectedHolding] =
    react.useState<InvesmentHolding>(Account.holdings[0]);

  const { holdings, securities } = Account;

  const [selectedSecurity, setSelectedSecurity] = react.useState<
    InvestmentSecurity | undefined
  >(securities.length > 0 ? securities[0] : undefined);

  // get the total value of all holdings
  const totalValue = computeTotalCostBasis(holdings);
  const totalInstitutionValue = computeTotalInstitutionValue(holdings);
  const totalProfitLoss = computeTotalProfitLoss(holdings);
  const averageCostBasis = computeAverageCostBasis(holdings);
  const largestHolding = findLargestHolding(holdings);
  const smallestHolding = findSmallestHolding(holdings);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{Account.name}</CardTitle>
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${formatToTwoDecimalPoints(totalValue)}
          </div>
          <p className="text-xs text-muted-foreground">
            {formatToTwoDecimalPoints(totalProfitLoss)} Total P/L
          </p>
        </CardContent>

        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Holding Statistics
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
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 flex-wrap gap-3">
            <div className="flex flex-col text-xs text-muted-foreground">
              <p className="font-bold"> average cost basis </p>
              <p>${formatToTwoDecimalPoints(averageCostBasis)}</p>
            </div>
            <div className="text-xs text-muted-foreground">
              <p className="font-bold"> largest holding </p>
              <p>${largestHolding?.institutionValue}</p>
            </div>
            <div className="text-xs text-muted-foreground">
              <p className="font-bold"> smallest holding </p>
              <p>${smallestHolding?.institutionValue}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="py-3 grid grid-cols-1 gap-3">
        {securities.map((security, index) => (
          <SecurityCard
            security={security}
            key={index}
            setSelectedSecurity={setSelectedSecurity}
          />
        ))}
      </div>
      {/* {selectedSecurity && (
        <Card className="py-2">
          <CardContent className="p-5">
            <AdvancedRealTimeChart
              theme="light"
              hide_top_toolbar={true}
              hide_legend={false}
              hide_side_toolbar={true}
              details={true}
              hotlist={false}
              calendar={true}
              width={"100%"}
              symbol={`${selectedSecurity.tickerSymbol}`}
              style="3"
            ></AdvancedRealTimeChart>
          </CardContent>
        </Card>
      )} */}
    </>
  );
};

function computeTotalCostBasis(holdings: InvesmentHolding[]): number {
  return holdings.reduce((total, holding) => total + holding.costBasis, 0);
}

function computeAverageCostBasis(holdings: InvesmentHolding[]): number {
  const totalCostBasis = computeTotalCostBasis(holdings);
  return totalCostBasis / holdings.length;
}

function computeTotalInstitutionValue(holdings: InvesmentHolding[]): number {
  return holdings.reduce(
    (total, holding) => total + holding.institutionValue,
    0
  );
}

function computeTotalProfitLoss(holdings: InvesmentHolding[]): number {
  const totalInstitutionValue = computeTotalInstitutionValue(holdings);
  const totalCostBasis = computeTotalCostBasis(holdings);
  return totalInstitutionValue - totalCostBasis;
}

function findLargestHolding(
  holdings: InvesmentHolding[]
): InvesmentHolding | null {
  if (holdings.length === 0) return null;
  return holdings.reduce((prev, current) =>
    prev.institutionValue > current.institutionValue ? prev : current
  );
}

function findSmallestHolding(
  holdings: InvesmentHolding[]
): InvesmentHolding | null {
  if (holdings.length === 0) return null;
  return holdings.reduce((prev, current) =>
    prev.institutionValue < current.institutionValue ? prev : current
  );
}

export { HoldingCard };
