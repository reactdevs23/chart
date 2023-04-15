import React from "react";
import { MdClose } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { tick } from "../../../images/images";
import styles from "./ConnectWallet.module.css";

const WhiteList = () => {
  return (
    <div className={[styles.whiteListContainer, styles.wrapper].join(" ")}>
      <div className={[styles.whiteList, styles.box].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={tick} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>Staking</p>
        </div>
        <div
          className={[styles.isWhiteListed, styles.notWhitelisted].join(" ")}
        >
          <p className={styles.text}>False</p>
          <div className={styles.checkMarkContainer}>
            <MdClose className={styles.checkMark} />
          </div>
        </div>
      </div>
      <div className={[styles.whiteList, styles.box].join(" ")}>
        <div className={styles.iconAndName}>
          <div className={styles.iconContainer}>
            <img src={tick} alt="#" className={styles.icon} />
          </div>
          <p className={styles.text}>Whitelisted</p>
        </div>
        <div className={[styles.isWhiteListed, styles.whitelisted].join(" ")}>
          <p className={styles.text}>True</p>
          <div className={styles.checkMarkContainer}>
            <BiCheck className={styles.checkMark} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteList;
