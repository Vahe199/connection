import {SET_LOGGED_IN} from '../actionsTypes';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: payload,
      };
    }
    default:
      return state;
  }
};
