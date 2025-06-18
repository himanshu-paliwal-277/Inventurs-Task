import React, { memo } from "react";
import styles from "./header.module.css";
import searchIcon from "../../assets/searchIcon.svg";
import bagIcon from "../../assets/bagIcon.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>About us</li>
        <li className={styles.listItem}>Spring</li>
        <li className={styles.listItem}>FAQ</li>
      </ul>
      <div>
        <a className={styles.logoLink} href="#">
          Headless
        </a>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <img
            className={styles.searchIcon}
            src={searchIcon}
            alt="search icon"
          />
        </button>
        <button className={styles.button}>
          <img className={styles.bagIcon} src={bagIcon} alt="bag icon" />
        </button>
      </div>
    </div>
  );
};

export default memo(Header);
