import React from "react";
import styles from "./LaunchPad.module.css";
import AboutProject from "./AboutProject/AboutProject";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import Rate from "./Rate/Rate";
import HalfRadialChart from "./Chart/HalfRadialChart";
import BuyUbs from "./BuyUbs/BuyUbs";

const LaunchPad = () => {
  const rate = [
    {
      key: "Sale type:",
      value: "Public",
    },
    {
      key: "Token Name",
      value: "Hepton",
    },
    {
      key: "Symbol:",
      value: "HTE",
    },
    {
      key: "Supply:",
      value: "3,000,000,000",
    },
    {
      key: "IDO Price:",
      value: "0.006 USDT",
    },
    {
      key: "Soft Cap:",
      value: "50,000 USDT",
    },
    {
      key: "Minimum:",
      value: "100,000 USDT",
    },
    {
      key: "Max Purchase:",
      value: "5,000 USDT",
    },

  ];
  return (
    <div className="container">
      <div className={styles.launchPad}>
        <div className={styles.wrapper}>
          <AboutProject />
          <div className={styles.rateContainer}>
            <Rate rate={rate} />
          </div>

          <HalfRadialChart />
        </div>
        <div className={styles.wrapper}>
          <ConnectWallet />
          <BuyUbs />
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
