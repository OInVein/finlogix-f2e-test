import { SET_WEBINAR_LIST } from '../../constants';

const initialState = [];

const webinarList = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEBINAR_LIST: {
      const { list } = action;
      return list;
    }
    default:
      return state;
  }
}

export default webinarList;
