import * as actionTypes from '../actions/ActionTypes';
import {
  PlayerId,
} from '../util/PlayerId';

interface IState {
  gameRunning: boolean;
  winner?: PlayerId | null;
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

const DEFAULT_TIME_MS: number = 60000;

const INITIAL_STATE: IState = {
  gameRunning: false,
  winner: null,
  p1StartTime: null,
  p2StartTime: null,
  p1Time: DEFAULT_TIME_MS,
  p2Time: DEFAULT_TIME_MS,
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
  switch (action.type) {
    case actionTypes.START_MATCH:
      return {
        ...state,
        gameRunning: true,
        // activePlayer: PlayerId.PLAYER_2,
      };

    case actionTypes.RESET_MATCH:
      return INITIAL_STATE;

    case actionTypes.START_TIMER:
      return {
        ...state,
        p1StartTime: action.currentTime,
        p2StartTime: action.currentTime,
      };

    case actionTypes.PAUSE_MATCH:
      return {
        ...state,
        gameRunning: false,
      };

    case actionTypes.NEW_ACTIVE_PLAYER:
      // console.log(action)
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
      if (!state.gameRunning) {
        return { ...state };
      }
      const playerTimer = state.activePlayer === PlayerId.PLAYER_1
      ? state.p1StartTime
      : state.p2StartTime;
      const playerOffset = state.activePlayer === PlayerId.PLAYER_1
      ? state.p1Offset
      : state.p2Offset;

      const elapsedTime: number = (action.currentTime - playerTimer) + playerOffset;
      let timeLeft = DEFAULT_TIME_MS - elapsedTime;
      const isRunning: boolean = timeLeft > 0;
      const potentialWinner = state.activePlayer === PlayerId.PLAYER_1
      ? PlayerId.PLAYER_2 : PlayerId.PLAYER_1;
      const curWinner = !isRunning ? potentialWinner : null;
      timeLeft = isRunning ? timeLeft : 0;
      if (state.activePlayer === PlayerId.PLAYER_1) {
        return {
          ...state,
          p1Time: timeLeft,
          gameRunning: isRunning,
          p1Elapsed: elapsedTime,
          winner: curWinner,
        };
      }
      return {
        ...state,
        p2Time: timeLeft,
        gameRunning: isRunning,
        p2Elapsed: elapsedTime,
        winner: curWinner,
      };

    default:
      return state;
  }
};
