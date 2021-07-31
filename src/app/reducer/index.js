import userInfo from './userInfo';
import isLoading from './isLoading';
import webinarList from './webinarList';

import { combineReducers } from 'redux';

const reducer = combineReducers({
  userInfo,
  isLoading,
  webinarList,
});

export default reducer;
