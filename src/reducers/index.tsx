import { combineReducers } from 'redux';
import ActivePlayerReducer from './ActivePlayerReducer';
import IncreaseP1CountReducer from './IncreaseP1CountReducer';
import IncreaseP2CountReducer from './IncreaseP2CountReducer';
import TimerReducer from './TimerReducer';

export default combineReducers({
  activePlayer: ActivePlayerReducer,
  p1Count: IncreaseP1CountReducer,
  p2Count: IncreaseP2CountReducer,
  timer: TimerReducer,
});
