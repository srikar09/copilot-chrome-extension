import { useState } from "react";
import { InvestmentSecurity } from "src/types/financials/message_financial_service";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { cn, formatDate } from "src/lib/utils";

const SecurityCard: React.FC<{
  security: InvestmentSecurity;
  setSelectedSecurity: (security: InvestmentSecurity) => void;
}> = (props) => {
  const { security, setSelectedSecurity } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      <Card
        className={cn(
          "flex flex-col justify-between border-t rounded-2xl min-h-[300px]",
          isSelected ? "border border-black" : ""
        )}
        onClick={() => {
          setSelectedSecurity(security);
          setIsSelected(!isSelected);
        }}
      >
        <CardHeader>
          <p className="font-bold text-md">
            {security.name}{" "}
            <span
              className="text-xs"
              style={{
                fontSize: "8px",
              }}
            >
              {" "}
              ({security.tickerSymbol})
            </span>
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-md md:text-2xl lg:text-3xl font-bold">
            ${security.closePrice}
            <span
              className="text-xs p-1 rounded-2xl bg-black text-white font-bold ml-1"
              style={{
                fontSize: "9px",
              }}
            >
              {" "}
              {security.type}
            </span>
          </p>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-sm">
              {formatDate(security.closePriceAsOf)}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export { SecurityCard };
