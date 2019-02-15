import { combineReducers } from 'redux';
import PlayerCountReducer from './PlayerCountReducer';
import GameInfoReducer from './GameInfoReducer';

export default combineReducers({
  playerCount: PlayerCountReducer,
  gameInfo: GameInfoReducer,
});
