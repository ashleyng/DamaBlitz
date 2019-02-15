import * as actionTypes from '../actions/ActionTypes';
import {
  PlayerId,
} from '../util/PlayerId';

interface IState {
  gameRunning: boolean;
  p1StartTime?: Date | null;
  p2StartTime?: Date | null;
  p1Time: number;
  p2Time: number;
  activePlayer?: PlayerId | null;
  p1Offset: number;
  p2Offset: number;
  p1Elapsed: number;
  p2Elapsed: number;
}

const DEFAULT_TIME: number = 60000;

const INITIAL_STATE: IState = {
  gameRunning: false,
  p1StartTime: null,
  p2StartTime: null,
  p1Time: DEFAULT_TIME,
  p2Time: DEFAULT_TIME,
  activePlayer: PlayerId.PLAYER_1,
  p1Offset: 0,
  p2Offset: 0,
  p1Elapsed: 0,
  p2Elapsed: 0,
};


export default (
  state = INITIAL_STATE,
  action: { type: String, currentTime: Date, newActivePlayer: PlayerId },
  ) => {
    console.log(action.type)
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
          p2Offset: state.p2Elapsed,
        };
      }
      return {
        ...state,
        activePlayer: action.newActivePlayer,
        p2StartTime: action.currentTime,
        p1Offset: state.p1Elapsed,
      };

    case actionTypes.TIMER_INTERVAL:
      const playerTimer = state.activePlayer === PlayerId.PLAYER_1
      ? state.p1StartTime
      : state.p2StartTime;
      const playerOffset = state.activePlayer === PlayerId.PLAYER_1
      ? state.p1Offset
      : state.p2Offset;

      const elapsedTime: number = (action.currentTime - playerTimer) + playerOffset
      let timeLeft = DEFAULT_TIME - elapsedTime;
      const isRunning: boolean = timeLeft > 0;
      timeLeft = isRunning ? timeLeft : 0;
      if (state.activePlayer === PlayerId.PLAYER_1) {
        return { ...state, p1Time: timeLeft, gameRunning: isRunning, p1Elapsed: elapsedTime };
      }
      return { ...state, p2Time: timeLeft, gameRunning: isRunning, p2Elapsed: elapsedTime };

    default:
      return state;
  }
};
