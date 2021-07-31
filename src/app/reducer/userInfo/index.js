import { SET_USER_INFO } from '../../constants';

const initialState = {};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      const { infos } = action;
      return infos;
    }
    default:
      return state;
  }
}

export default userInfo;
