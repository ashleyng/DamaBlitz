import * as actionTypes from '../actions/ActionTypes';

export default(state: number = 1, action: { type: String, payload: number}) => {
  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_PLAYER:
      return action.payload;
    default:
      return state;
  }
};
