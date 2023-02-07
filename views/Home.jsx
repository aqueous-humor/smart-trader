import React from "react";
import { Button } from "react-bootstrap";
import Layout from "./shared/Layout";

const Home = () => {
  return (
    <Layout>
      <>
        <div className="intro-div">
          <div className="w-50">
            <div className="dark-text">
            <h1>Accurate Trading Signals From The Best Analysts</h1>
            <p>
              Helping you to trade the market with confidence, by offering our
              wealth of experience.
            </p>
            </div>
            <div>
              <Button
                style={{ width: "250px" }}
                className="signup-btn"
                variant="dark"
                href="#"
              >
                Get Signals
              </Button>
            </div>
          </div>
          <span>
            <img className="phone-img" src="" />
          </span>
        </div>
        <div className="why-us p-5 my-5">
          <h2 className="dark-text">Why You Should Choose Us</h2>
          <div className="benefits d-flex light-text">
            <div>
              <img src="" alt="" />
              <h4>Secure Trading</h4>
              <p>
                All trades from us come with recommended stop loss and take
                profit levels
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <h4>Accurate Signals</h4>
              <p>Our trading strategy has a proven success rate of 85%</p>
            </div>
            <div>
              <img src="" alt="" />
              <h4>Real-Time Data</h4>
              <p>
                Get all the important updates on news and market actions, as
                they happen
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
