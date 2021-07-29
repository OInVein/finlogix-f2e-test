import { SHOW_MODAL, HIDE_MODAL, CLEAR_MODAL } from '../../constants';

const initialState = {
  modalType: null,
  modalProps: {},
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: {
          ...action.modalProps,
          isOpen: true,
        },
      };
    case HIDE_MODAL:
      return {
        modalType: action.modalType,
        modalProps: {
          ...state.modalProps,
          isOpen: false,
        },
      };
    case CLEAR_MODAL:
      return {
        modalType: null,
        modalProps: {},
      };
    default:
      return state;
  }
}

export default userInfo;
