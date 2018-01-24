import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { merge } from 'lodash';

export const errorReducer = (state = [], action) => {
  let newState;
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge([], action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
