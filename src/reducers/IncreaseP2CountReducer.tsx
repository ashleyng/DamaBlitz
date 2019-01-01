import * as actionTypes from '../actions/ActionTypes';

export default (state: number = 0, action: { type: String }) => {
  switch (action.type) {
    case actionTypes.INCREASE_P2_COUNT:
      return state + 1;
    default:
      return state;
  }
};
