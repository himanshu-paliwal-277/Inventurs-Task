import React, { memo } from "react";
import styles from "./landingPage.module.css";
import Header from "../header/Header";
import HeroSection from "../hero-section/HeroSection";
import BrandSection from "../brandSection/BrandSection";
import ShopBrandSection from "../shop-brand-section/ShopBrandSection";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <BrandSection />
      <ShopBrandSection />
    </div>
  );
};

export default memo(LandingPage);
