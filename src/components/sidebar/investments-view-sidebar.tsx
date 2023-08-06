import {
  CandlestickChart,
  ArrowDownToDot,
  ArrowUpFromDot,
  ArrowUpNarrowWide,
  Rocket,
  Bitcoin,
  CircleDollarSign,
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
                setSelectedOption("CRYPTO");
              }}
            >
              <Bitcoin className="mr-2 h-4 w-4" />
              CryptoCurrencies
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("STOCKS");
              }}
            >
              <CircleDollarSign className="mr-2 h-4 w-4" />
              Stocks
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InvestmentViewSidebar };
