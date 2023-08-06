import {
  CandlestickChart,
  ArrowDownToDot,
  ArrowUpFromDot,
  ArrowUpNarrowWide,
  Rocket,
} from "lucide-react";
import { cn } from "src/lib/utils";
import { Button } from "../ui/button";
import { InvestmentSidebarOption } from "src/types";

interface IProps {
  className?: React.ReactNode;
  selectedOption: InvestmentSidebarOption;
  setSelectedOption: (option: InvestmentSidebarOption) => void;
}

const InvestmentViewSidebar: React.FC<IProps> = (props) => {
  const { className, selectedOption, setSelectedOption } = props;
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Details
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("OVERVIEW");
              }}
            >
              <CandlestickChart className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("HOLDINGS");
              }}
            >
              <ArrowDownToDot className="mr-2 h-4 w-4" />
              Holdings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("TRANSACTIONS");
              }}
            >
              <ArrowUpFromDot className="mr-2 h-4 w-4" />
              Transactions
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("PERFORMANCE");
              }}
            >
              <ArrowUpNarrowWide className="mr-2 h-4 w-4" />
              Performance
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("SECURITIES");
              }}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Securities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InvestmentViewSidebar };
