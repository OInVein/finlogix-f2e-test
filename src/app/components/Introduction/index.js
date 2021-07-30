import React from 'react';
import styles from './index.module.scss';

const Introduction = (props) => {
  return (
    <div className={styles.introduction}>
      <div className={styles.introductionDes}>
        <div className={styles.introductionDesTopic}>Meet Your Host - Alistair Schultz</div>
        <div className={styles.introductionDesContent}>
          With more than 15 years of experience covering both the FX and CFD markets, Alistair has
          extensive knowledge covering algorithmic trading, market analysis & an impressive
          educational background.
          <br />
          <br />
          As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring
          Traders’, which was released in 2017, Alistair will take any aspiring trader from the
          basics right through to advanced analytics used in institutional funds.
          <br />
          <br />
          At the core of Alistair’s teachings is the ability to help each trader uncover their
          ‘Trading DNA', helping them flourish with the skills and timeframes that work best for
          them.
          <br />
          <br />
        </div>
        <div className={styles.introductionDesMore}>
          See More <div className={styles.introductionDesMoreButton} />
        </div>
      </div>
      <div className={styles.introductionVideo}>
        <iframe
          width="820"
          height="461"
          src="https://www.youtube.com/embed/oLFol2uCp0w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

Introduction.propTypes = {};

export default Introduction;
