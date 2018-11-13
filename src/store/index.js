import * as  memoryGame from './memory';
import * as bowlingGame from './bowling';
import * as appConstants from '../constants';

export const initialState = {
    selectedGame: appConstants.MEMORY_GAME,
    memoryGame: memoryGame.init(),
    bowlingGame: bowlingGame.init()
  };