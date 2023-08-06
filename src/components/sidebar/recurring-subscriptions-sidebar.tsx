import { cn } from "src/lib/utils";
import { Button } from "../ui/button";
import {
  ArrowDownToDot,
  ArrowUpFromDot,
  ArrowUpNarrowWide,
  BadgeDollarSign,
  BatteryChargingIcon,
  CandlestickChart,
  Rocket,
} from "lucide-react";
import { SubscriptionsSidebarOption } from "src/types/custom/recurring-transaction-types";

/*
 * ISubscriptionSidebarProps is a React Component properties that passed to React
 * Component SubscriptionSidebar
 *
 * @interface ISubscriptionSidebarProps
 * */
interface ISubscriptionSidebarProps {
  className?: React.ReactNode;
  setSelectedOption: (option: SubscriptionsSidebarOption) => void;
}

/**
 * SubscriptionSidebar component
 * @param className
 * @param setSelectedOption
 * @returns
 */
const SubscriptionSidebar: React.FC<ISubscriptionSidebarProps> = ({
  className,
  setSelectedOption,
}) => {
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
                setSelectedOption("INFLOW");
              }}
            >
              <BadgeDollarSign className="mr-2 h-4 w-4" />
              Inflow
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("OUTFLOW");
              }}
            >
              <BatteryChargingIcon className="mr-2 h-4 w-4" />
              Outflow
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("UPCOMING");
              }}
            >
              <ArrowUpNarrowWide className="mr-2 h-4 w-4" />
              Upcoming
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                setSelectedOption("DRILLDOWN");
              }}
            >
              <Rocket className="mr-2 h-4 w-4" />
              Drill Down
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SubscriptionSidebar };
