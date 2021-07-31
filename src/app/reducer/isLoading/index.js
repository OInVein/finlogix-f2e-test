import { START_LOADING, PAUSE_LOADING } from '../../constants';

const initialState = true;

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case PAUSE_LOADING:
      return false;
    default:
      return state;
  }
}

export default isLoading;
