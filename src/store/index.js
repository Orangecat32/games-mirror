import {createCards} from '../components/MemoryGame/utils';
import {emptyFrames} from '../components/BowlingGame/utils';
import * as appConstants from '../constants';

export const initialState = {
    selectedGame: appConstants.MEMORY_GAME,
    showAll:false,
    cards: createCards(),
    frames: emptyFrames(),
    memoryClicks: 0
  };