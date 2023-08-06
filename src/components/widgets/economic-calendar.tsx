import React, { useEffect, useRef, memo } from "react";
import { Card } from "../ui/card";

function GlobalEconomicCalendar() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "importanceFilter": "0,1",
        "currencyFilter": "USD,EUR,ITL,NZD,CHF,AUD,FRF,JPY,ZAR,TRL,CAD,DEM,MXN,ESP,GBP"
      }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <Card
      className="w-full h-[500px] p-3"
      style={{
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow noreferrer"
            target="_blank"
          ></a>
        </div>
      </div>
    </Card>
  );
}

const GlobalEconomicCalendarChart = memo(GlobalEconomicCalendar);
export { GlobalEconomicCalendarChart };
