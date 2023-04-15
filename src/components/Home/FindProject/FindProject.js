import React from "react";
import {
  category,
  coin,
  collection,
  filtering,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../../images/images";
import Card from "./Card/Card";
import styles from "./FindProject.module.css";

const FindProject = () => {
  const projects = [
    {
      status: "Upcoming",
      statusbg: "#FFC107",
      feature: ["Kyc+", "audit"],
      image:
        "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg",
      name: "Hepton L3",
      tagline: "Fair Launch",
      info: "Hepton is a Layer-3 infrastructure project that offers a hyper-scale solution for the Ethereum network.",
      currency: "USDT",
      softcap: 50000,
      hardcap: 100000,
      liquidity: 93.75,
      wlSpot: 800,
      progress: 0,
      startPrice: 0,
      endPrice: "TBA",
      color: "#CEE8FF",
      background: "#46A6FF",
    },
  ];
  return (
    <div className={styles.projectsContainer}>
      <div className="container">
        {" "}
        <div className={styles.header}>
          <p className={styles.heading}>Find the project you want</p>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <img src={category} alt="#" className={styles.icon} />
              <span className={styles.text}>Category</span>
            </div>{" "}
            <div className={styles.button}>
              <img src={collection} alt="#" className={styles.icon} />
              <span className={styles.text}>Collection </span>
            </div>{" "}
            <div className={styles.button}>
              <img src={coin} alt="#" className={styles.icon} />
              <span className={styles.text}>Price Range</span>
            </div>{" "}
            <div className={styles.button}>
              <img src={filtering} alt="#" className={styles.icon} />
              <span className={styles.text}>Filter & Sort</span>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          {projects.map((el, i) => (
            <Card {...el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindProject;
