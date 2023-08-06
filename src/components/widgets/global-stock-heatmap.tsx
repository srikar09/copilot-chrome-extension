import React, { useEffect, useRef, memo } from "react";
import { Card } from "../ui/card";

function GlobalStockHeatMap() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "exchanges": [],
          "dataSource": "SPX500",
          "grouping": "sector",
          "blockSize": "market_cap_basic",
          "blockColor": "change",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "light",
          "hasTopBar": true,
          "isDataSetEnabled": true,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "width": "100%",
          "height": "100%"
        }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <Card className="w-full h-[500px]">
      <div className="tradingview-widget-container rounded-2xl" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        {/* <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div> */}
      </div>
    </Card>
  );
}

const GlobalStockHeatmapChart = memo(GlobalStockHeatMap);
export { GlobalStockHeatmapChart };
