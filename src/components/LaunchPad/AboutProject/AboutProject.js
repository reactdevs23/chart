import React, { useState } from "react";
import {
  project1,
  topImage,
  youtube,
  facebook,
  web,
  whatapp,
} from "../../../images/images";
import styles from "./AboutProject.module.css";

const AboutProject = () => {
  const [showMore, setShowMore] = useState(false);
  const socialMedia = [
    {
      icon: youtube,
      to: "#",
    },
    {
      icon: facebook,
      to: "#",
    },
    {
      icon: whatapp,
      to: "#",
    },
    {
      icon: web,
      to: "#",
    },
  ];
  return (
    <div className={styles.aboutProject}>
      <img src={topImage} alt="#" className={styles.topImage} />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.projectNameImage}>
            <img src={"https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg"} alt="#" className={styles.image} />
            <div className={styles.nameAndTagline}>
              <p className={styles.name}>Hepton L3</p>
              <p className={styles.tagline}>HTE</p>
            </div>
          </div>

          <div className={styles.featuresAndStatus}>
            <div className={styles.features}>
              <p className={styles.feature}>Kyc+</p>
            </div>
            <div className={styles.features}>
              <p className={styles.feature}>Audit</p>
            </div>

            <div className={styles.status}>
              <span className={styles.circle}></span>
              <span className={styles.statusText}>Upcoming</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomPart}>
        <div className={styles.titleAndSocialMedia}>
          <h4 className={styles.title}>About Hepton</h4>
          <div className={styles.socialMediaContainer}>
            {socialMedia.map((el, i) => (
              <a
                key={i}
                href={el.to}
                target="_blank"
                rel="noreferrer"
                className={styles.iconContainer}
              >
                <img src={el.icon} alt="#" className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
        <p className={[styles.text, showMore && styles.textScroll].join(" ")}>
          Hepton is a Layer-3 infrastructure project that offers a hyper-scale solution for the Ethereum network. Hepton provides two different scaling solutions which are Hepton PoS (sidechain to Ethereum) and Layer-3 network-based ZK-Rollup technology on top of Arbitrum Orbit (Nitro Stack){!showMore && <span>...</span>}{" "}
          {showMore && (
            <>
              {" "}
              Hepton is a Layer-3 infrastructure project that offers a hyper-scale solution for the Ethereum network. Hepton provides two different scaling solutions which are Hepton PoS (sidechain to Ethereum) and Layer-3 network-based ZK-Rollup technology on top of Arbitrum Orbit (Nitro Stack).

              HTE is the native utility token that is used for various matter including as a gas-fees for processing transactions and storing data on Hepton PoS. Second, as a running validator nodes on the sidechain (Hepton PoS) via staking HTE tokens. Lastly, HTE also used for governance votes on Layer-3 (Hepton STANDRA) to determine how network resources are allocated.

              Moreover, Hepton tools include Hepton PoS which is a PoS Sidechain on top of Ethereum and connected through a two-way pegged model. On the other hand, Hepton ZK-Standra is a layer-3 based on ZK-Rollup technology on top of Arbitrum Orbit.

            </>
          )}
          {!showMore && (
            <span
              className={styles.showMore}
              onClick={() => setShowMore((prev) => !prev)}
            >
              Show More
            </span>
          )}
          .
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
