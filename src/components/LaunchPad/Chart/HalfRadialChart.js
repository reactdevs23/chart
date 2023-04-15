import React, { useState } from "react";

import styles from "./styles.module.css";

const HalfRadialChart = () => {
  const [active, setActive] = useState(1);

  const data = [
    {
      key: "Presale",
      value: "125 M",
      percentage: "4.17",
      background: "#1CED86",
    },
    {
      key: "Liquidity",
      value: "240 M",
      percentage: "10",
      background: "#1893EC",
    },
    {
      key: "Team",
      value: "300 M",
      percentage: "15",
      background: "#FF3559",
    },
    {
      key: "Treasury",
      value: "150 M",
      percentage: "10",
      background: "#FFAA35",
    },
    {
      key: "Marketing",
      value: "24 M",
      percentage: "25",
      background: "#2263C5",
    },
    {
      key: "Staking",
      value: "1.6B",
      percentage: "55.54",
      background: "#BE13C1",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        {" "}
        <div className={styles.overflowHidden}>
          <div className={[styles.multiGraph].join(" ")}>
            {data.reverse().map((el, i) => (
              <div
                key={i}
                className={styles.graph}
                data-name="jQuery"
                style={{
                  "--percentage": el.percentage,
                  "--fill": el.background,
                }}
              >
                {" "}
              </div>
            ))}

            <p className={styles.toolTip}>
              {[...data].reverse()[active - 1].percentage}%
            </p>

            <div className={styles.dognutInnerContent}>
              <h5>609.8K</h5>
              <span>Supply</span>
            </div>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          {data.reverse().map((el, i) => (
            <div
              className={styles.details}
              style={{
                border: active === i + 1 && `2px solid ${el.background}`,
              }}
              key={i}
              onClick={() => setActive(i + 1)}
            >
              <div
                className={styles.bar}
                style={{
                  background: el.background,
                  width: active === i + 1 && "27px",
                }}
              >
                {active === i + 1 && (
                  <p className={styles.dot}>
                    <span className={styles.innerDot}></span>
                  </p>
                )}
              </div>
              <div>
                <p className={styles.key}>{el.key}</p>
                <p className={styles.value}>{el.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HalfRadialChart;
