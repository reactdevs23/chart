import React from "react";

import styles from "./ConnectWallet.module.css";
import {
  connectWalletbanner,
  liteCoin,
  lock,
  profileCircle,
} from "../../../images/images";
import Features from "./Features";
import WhiteList from "./WhiteList";
import ConnectedWallet from "./Connected";
import MyAllocation from "./MyAllocation";

const ConnectWallet = () => {
  const features = [
    {
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      text: "USDT",
    },
    {
      icon: lock,
      percent: 93.75,
    },
    {
      icon: profileCircle,
      value: {
        curentValue: 0,
        topValue: 800,
      },
    },
    {
      icon: lock,
      value: {
        curentValue: 0,
        topValue: 400,
      },
    },
  ];
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.connectWalletContainer}>
        <img src={connectWalletbanner} alt="#" className={styles.banner} />
        <div className={styles.spaceBetween}>
          <h3 className={styles.title}>
            Learn More about <br /> Hepton
          </h3>
          <button className={styles.button}>
            <span className={styles.buttonText}>Whitepaper</span>
          </button>{" "}
        </div>
      </div>

      <div className={styles.informationContainer}>
        <Features features={features} />
        <WhiteList />
        <ConnectedWallet />
        <MyAllocation />
      </div>
    </div>
  );
};

export default ConnectWallet;
