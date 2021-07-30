import React from 'react';
import styles from './index.module.scss';

const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTitle}>Forex Webinars</div>
      <div className={styles.bannerContent}>
        Whether you are new to foreign exchange trading or already have some market experience, we
        believe that a solid FX trading education is vital to your success as a trader.
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
