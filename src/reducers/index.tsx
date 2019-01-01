import { combineReducers } from 'redux';
import ActivePlayerReducer from './ActivePlayerReducer';
import IncreaseP1CountReducer from './IncreaseP1CountReducer';
import IncreaseP2CountReducer from './IncreaseP2CountReducer';

export default combineReducers({
  activePlayer: ActivePlayerReducer,
  p1Count: IncreaseP1CountReducer,
  p2Count: IncreaseP2CountReducer,
});
