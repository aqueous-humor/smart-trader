import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_571bf") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "OANDA:EURUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          withdateranges: true,
          allow_symbol_change: true,
          details: true,
          container_id: "tradingview_571bf",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-100">
      <div id="tradingview_571bf" className="h-100 w-100" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/EURUSD/?exchange=OANDA"
          rel="noopener"
          target="_blank"
        >
          <span className="blue-text">EUR USD chart</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
}
