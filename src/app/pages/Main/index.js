import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PAUSE_LOADING } from '../../constants';
import { MainContainer, SubContainer } from '../../containers';
import { Header, Banner, CardList, Introduction, RegisterForm } from '../../components';
import { getCardList } from '../../utils';

const Main = () => {
  const [cardList, setCardList] = useState([]);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCardList = async () => {
      const list = await getCardList();

      dispatch({ type: PAUSE_LOADING });

      const groupedList = list.reduce((acc, curr, index) => {
        if (index % 6 === 0) {
          acc.push([]);
        }

        const lastPos = acc.length - 1;
        acc[lastPos].push(curr);
        return acc;
      }, []);

      setCardList(groupedList);
    };

    fetchCardList();
  }, []);

  return (
    <MainContainer>
      <Header />

      <SubContainer>
        <Banner />
        <CardList loading={isLoading} list={cardList} />
        <Introduction />
        <RegisterForm />
      </SubContainer>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
