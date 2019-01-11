import * as actionTypes from '../actions/ActionTypes';
import {
  PlayerId,
} from '../util/PlayerId';

export default(state: PlayerId = PlayerId.PLAYER_1, action: { type: String, payload: number}) => {
  switch (action.type) {
    case actionTypes.NEW_ACTIVE_PLAYER:
      return action.payload;
    default:
      return state;
  }
};
