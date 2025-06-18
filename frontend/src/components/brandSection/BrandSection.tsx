import React, { memo } from 'react';
import styles from './brandSection.module.css';

const BrandSection: React.FC = () => {
  return (
    <div className={styles.container}>
      Brand section
    </div>
  );
};

export default memo(BrandSection);