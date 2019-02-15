import * as actionTypes from '../actions/ActionTypes';
import {
  PlayerId,
} from '../util/PlayerId';

interface IState {
  gameRunning: boolean;
  p1StartTime?: Date;
  p2StartTime?: Date;
  p1Time: number;
  p2Time: number;
  activePlayer?: PlayerId;
}

const DEFAULT_TIME: number = 60000;

const INITIAL_STATE: IState = {
  gameRunning: false,
  p1StartTime: null,
  p2StartTime: null,
  p1Time: DEFAULT_TIME,
  p2Time: DEFAULT_TIME,
  activePlayer: PlayerId.PLAYER_1,
};


export default (
  state = INITIAL_STATE,
  action: { type: String, currentTime: Date, newActivePlayer: PlayerId },
  ) => {
  // console.log('reducer: ', state)
  console.log('type: ', action.type)
  switch (action.type) {
    case actionTypes.START_MATCH:
      return {
        ...state,
        gameRunning: true,
        activePlayer: PlayerId.PLAYER_2,
      };
    case actionTypes.START_TIMER:
      return {
        ...state,
        p1StartTime: action.currentTime,
        p2StartTime: action.currentTime,
      };
    case actionTypes.NEW_ACTIVE_PLAYER:
      if (action.newActivePlayer === PlayerId.PLAYER_1) {
        return {
          ...state,
          activePlayer: action.newActivePlayer,
          p1StartTime: action.currentTime,
        };
      }
      return {
        ...state,
        activePlayer: action.newActivePlayer,
        p2StartTime: action.currentTime,
      };
    case actionTypes.TIMER_INTERVAL:
      const playerTimer = state.activePlayer === PlayerId.PLAYER_1
      ? state.p1StartTime
      : state.p2StartTime;

      let time: number = DEFAULT_TIME - (action.currentTime - playerTimer)
      const isRunning: boolean = time > 0;

      if (state.activePlayer === PlayerId.PLAYER_1) {
        time = isRunning ? time : 0;
        return { ...state, p1Time: time, gameRunning: isRunning };
      }

      time = isRunning ? time : 0;
      return { ...state, p2Time: time, gameRunning: isRunning };
    default:
      return state;
  }
};
