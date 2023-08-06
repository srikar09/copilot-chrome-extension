import React, { useEffect, useRef, memo } from "react";

function StockScreenerWdiget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "593",
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "showToolbar": true,
        "locale": "en",
        "market": "us",
        "colorTheme": "light"
      }`;
    if (container.current) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full h-[500px]">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            {/* <span className="blue-text">Track all markets on TradingView</span> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export const GlobalStockScreenerWidget = memo(StockScreenerWdiget);
