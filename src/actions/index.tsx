import * as actionTypes from './ActionTypes';

export const changeActivePlayer = (player: number, currentTime: Date) => {
  return {
    currentTime,
    type: actionTypes.NEW_ACTIVE_PLAYER,
    newActivePlayer: player,
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

export const timerInterval = (currentTime: Date) => {
  return {
    currentTime,
    type: actionTypes.TIMER_INTERVAL,
  };
};

export const startTimer = (currentTime: Date) => {
  // console.log(payload)
  return {
    currentTime,
    type: actionTypes.START_TIMER,
  };
};

export const startMatch = () => {
  return {
    type: actionTypes.START_MATCH,
  };
};
