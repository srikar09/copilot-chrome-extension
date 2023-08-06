import { useState } from "react";
import { InvestmentSecurity } from "src/types/financials/message_financial_service";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { cn, formatDate } from "src/lib/utils";
import { FundamentalData, MiniChart } from "react-ts-tradingview-widgets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
          "flex flex-col justify-between border-t rounded-2xl",
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
        <CardContent className="grid grid-cols-1">
          <div className="text-md md:text-2xl lg:text-3xl font-bold">
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
          </div>
          <div className="shadow-md border rounded-2xl my-4 p-2">
            <MiniChart
              colorTheme="light"
              width={"100%"}
              symbol={`${security.tickerSymbol}`}
              isTransparent={true}
            ></MiniChart>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Fundamentals</AccordionTrigger>
                <AccordionContent>
                  <FundamentalData
                    colorTheme="light"
                    width={"100%"}
                    symbol={`${security.tickerSymbol}`}
                    isTransparent={true}
                    displayMode="compact"
                  ></FundamentalData>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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
