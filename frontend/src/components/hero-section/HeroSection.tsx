import React, { memo } from "react";
import styles from "./heroSection.module.css";
import bannerImage from "../../assets/bannerImage.webp";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <img
          className={styles.bannerImage}
          src={bannerImage}
          alt="banner image"
        />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>GIFT GUIDE</h2>
          <p className={styles.description}>{`here's to joy`}</p>
          <button className={styles.shopButton}>SHOP GIFTS</button>
        </div>
      </div>

      <div className={styles.itemsContainer}>
        {[1, 2, 3].map(() => {
          return (
            <div className={styles.itemBox}>
              <p className={styles.itemDes}>
                “Lorem, ipsum dolor sit amet consectetur adipisicing elit.”
              </p>
              <h3 className={styles.itemTitle}>PRESS LOGO</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(HeroSection);
