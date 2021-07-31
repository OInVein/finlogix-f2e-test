import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PAUSE_LOADING } from '../../constants';
import { Header, Banner, CardList, Introduction, RegisterForm } from '../../components';
import { getCardList } from '../../utils';
import styles from './index.module.scss';

const Main = () => {
  const [cardList, setCardList] = useState([]);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCardList = async () => {
      const list = await getCardList();

      dispatch({ type: PAUSE_LOADING });

      setCardList(list);
    };

    fetchCardList();
  }, []);

  return (
    <div className={styles.appContainer}>
      <Header />

      <section className={styles.mainContainer}>
        <Banner />
        <CardList loading={isLoading} list={cardList} />
        <Introduction />
        <RegisterForm />
      </section>
    </div>
  );
};

Main.propTypes = {};

export default Main;
