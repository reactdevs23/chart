import React from "react";
import styles from "./ConnectWallet.module.css";
import { wallet, copy } from "../../../images/images";
import { useAccount } from "wagmi";

const ConnectedWallet = () => {
  const { address } = useAccount();
  return (
    <div className={styles.wrapper}>
      <div className={[styles.box, styles.addressAndName].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={wallet} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>Connected Wallet </p>
        </div>
        <div className={styles.addressContainer}>
          <p className={styles.address}>{address ? (String(address).slice(0, 6) + "...." + String(address).slice(-4)) : "Connect Wallet"}</p>
          <img src={copy} alt="#" className={styles.copyIcon} />
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallet;
