import React from "react";
import Layout from "./shared/Layout";
import TradingViewWidget from "./TradingViewWidget";

const LiveChart = () => {
  return (
    <Layout>
      <>
        <div className="d-flex justify-content-center align-items-center first-div">
          <div className="chart">
            <TradingViewWidget/>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default LiveChart;
