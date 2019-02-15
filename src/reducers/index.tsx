import { combineReducers } from 'redux';
import IncreaseP1CountReducer from './IncreaseP1CountReducer';
import IncreaseP2CountReducer from './IncreaseP2CountReducer';
import GameInfoReducer from './GameInfoReducer';

export default combineReducers({
  p1Count: IncreaseP1CountReducer,
  p2Count: IncreaseP2CountReducer,
  gameInfo: GameInfoReducer,
});
