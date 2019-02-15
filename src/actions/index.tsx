import * as actionTypes from './ActionTypes';

export const changeActivePlayer = (player: number) => {
  return {
    type: actionTypes.NEW_ACTIVE_PLAYER,
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

export const timerInterval = (payload: Date) => {
  return {
    payload,
    type: actionTypes.TIMER_INTERVAL,
  };
};

export const startPressed = (payload: Date) => {
  // console.log(payload)
  return {
    payload,
    type: actionTypes.START_PLAY,
  };
};
