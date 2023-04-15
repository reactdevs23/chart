import React, { useState } from "react";
import styles from "./BuyUbs.module.css";
import { testProject, ubsProject } from "../../../images/images";
import Rate from "../Rate/Rate";
import ProgressBar from "./RectangularProgressBar/ProgressBar";
import Counter from "./Counter/Counter";
const BuyUbs = () => {
  const [amount, setAmount] = useState(10);
  const rate = [
    {
      key: "Slippage tolerance",
      value: "4.02%",
    },
    {
      key: "Minimum:",
      value: "4.02%",
    },
    {
      key: "Available quote:",
      value: "1 BUS",
    },
    {
      key: "Total personal quote:",
      value: "1,000 BUS",
    },
  ];
  const handleKeyDown = (event) => {
    if (
      event.key !== "Backspace" &&
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight" &&
      event.key !== "ArrowUp" &&
      event.key !== "ArrowDown" &&
      !/[0-9]/.test(event.key)
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.ubsContainer}>
      <div className={styles.topArea}>
        <div className={styles.progressBarContainer}>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.progressBar].join(" ")}>
              <ProgressBar percentage={0} />
            </div>
            <div className={styles.box}>
              <Counter dayCount="Jun 01 2023 05:30:01" />
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.projectWrapper].join(" ")}>
              <img src={ubsProject} alt="#" className={styles.projectImage} />
              <div className={styles.valueContainer}>
                <p className={styles.value}>1 USDT ≈ 167 HTE</p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={[styles.box, styles.amountTobuyWrapper].join(" ")}>
              <p className={styles.amountToBuy}>Amount To Buy:</p>
              <div className={styles.projectAndValue}>
                <img src={testProject} alt="#" className={styles.testProject} />
                <input
                  min={1}
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles.amount}
                />

                <p className={styles.value}>USDT</p>
              </div>
              <div className={styles.availableContainer}>
                <span className={styles.text}>Available:</span>
                <span className={styles.availbleAmount}>4,474 USDT</span>
              </div>
            </div>
            <button className={styles.button}>
              <span className={styles.buttonText}>BUY HTE</span>
            </button>
          </div>
        </div>
      </div>
      <Rate rate={rate} />
    </div>
  );
};

export default BuyUbs;
