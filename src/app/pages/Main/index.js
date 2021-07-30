import React from 'react';
import styles from './index.module.scss';
import { Header, Banner, CardList, Introduction, RegisterForm } from '../../components';

const Main = (props) => {
  return (
    <div className={styles.appContainer}>
      <Header />

      <section className={styles.mainContainer}>
        <Banner />
        <CardList />
        <Introduction />
        <RegisterForm />
      </section>
    </div>
  );
};

Main.propTypes = {};

export default Main;
