import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PAUSE_LOADING, SET_WEBINAR_LIST } from '../../constants';
import { MainContainer, SubContainer } from '../../containers';
import { Header, Banner, CardList, Introduction, RegisterForm } from '../../components';
import { getCardList } from '../../utils';

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, webinarList } = useSelector(state => state);
  const groupedList = webinarList.reduce((acc, curr, index) => {
    if (index % 6 === 0) {
      acc.push([]);
    }

    const lastPos = acc.length - 1;
    acc[lastPos].push(curr);
    return acc;
  }, []);

  useEffect(() => {
    const fetchCardList = async () => {
      const list = await getCardList();

      dispatch({ type: PAUSE_LOADING });
      dispatch({ type: SET_WEBINAR_LIST, list });
    };

    fetchCardList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer>
      <Header />

      <SubContainer>
        <Banner />
        <CardList loading={isLoading} list={groupedList} />
        <Introduction />
        <RegisterForm />
      </SubContainer>
    </MainContainer>
  );
};

Main.propTypes = {};

export default Main;
