import * as actionTypes from './ActionTypes';

export const changeActivePlayer = (player: number) => {
  return {
    type: actionTypes.CHANGE_ACTIVE_PLAYER,
    payload: player,
  };
};

export const increaseP1Count = () => {
  return {
    type: actionTypes.INCREASE_P1_COUNT,
  };
};

export const increaseP2Count = () => {
  return {
    type: actionTypes.INCREASE_P2_COUNT,
  };
};
