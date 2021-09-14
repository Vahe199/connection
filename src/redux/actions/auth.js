import {SET_LOGGED_IN} from '../actionsTypes';

export const setAuthentication = isLoggedIn => dispatch => {
  dispatch({type: SET_LOGGED_IN, payload: isLoggedIn});
};
