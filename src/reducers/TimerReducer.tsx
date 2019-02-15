import * as actionTypes from '../actions/ActionTypes';

interface IState {
  isRunning: boolean;
  p1StartTime?: Date;
  p1Time: number;
}

const INITIAL_STATE: IState = {
  isRunning: false,
  p1StartTime: null,
  p1Time: 60000,
};

const DEFAULT_TIME: number = 60000;

export default (state = INITIAL_STATE, action: {type: String, payload: Date}) => {
  switch (action.type) {
    case actionTypes.START_PLAY:
      return { ...state, p1StartTime: action.payload, isRunning: true };
    case actionTypes.TIMER_INTERVAL:
      let p1Time: number = DEFAULT_TIME - (action.payload - state.p1StartTime)
      const isRunning: boolean = p1Time > 0;
      p1Time = isRunning ? p1Time : 0;
      return { ...state, isRunning, p1Time };
    default:
      return state;
  }
};
