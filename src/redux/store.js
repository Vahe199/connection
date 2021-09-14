import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {authReducer} from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middlewares = [
//   /* other middlewares */
// ];

// if (__DEV__) {
// }

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
