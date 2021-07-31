import React from 'react';
import styles from './index.module.scss';

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.loadingBlue}></div>
    <div className={styles.loadingOrange}></div>
    <div className={styles.loadingBlueCopy}></div>
    <div className={styles.loadingBlack}></div>
    <div className={styles.loadingBlackCopyRotate45}></div>
    <div className={styles.loadingGreen}></div>
    <div className={styles.loadingGreenCopy}></div>
    <div className={styles.loadingRed}></div>
    <div className={styles.loadingRedCopy}></div>
  </div>
);

export default Loading;
