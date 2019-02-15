import * as actionTypes from '../actions/ActionTypes';

interface IState {
  p1Count: number;
  p2Count: number;
}

const INITIAL_STATE =  {
  p1Count: 0,
  p2Count: 0,
};

export default (state: IState = INITIAL_STATE, action: { type: String }) => {
  switch (action.type) {
    case actionTypes.INCREASE_P1_COUNT:
      return { ...state, p1Count: state.p1Count + 1 };
    case actionTypes.INCREASE_P2_COUNT:
      return { ...state, p2Count: state.p2Count + 1 };
    default:
      return state;
  }
};
