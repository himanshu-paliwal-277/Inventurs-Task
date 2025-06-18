import React, { memo } from 'react';
import styles from './shopBrandSection.module.css';

const ShopBrandSection: React.FC = () => {
  return (
    <div className={styles.container}>
      shop brand section
    </div>
  );
};

export default memo(ShopBrandSection);