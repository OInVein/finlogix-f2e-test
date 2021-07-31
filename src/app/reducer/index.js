import userInfo from './userInfo';
import isLoading from './isLoading';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  userInfo,
  isLoading,
});

export default reducer;
