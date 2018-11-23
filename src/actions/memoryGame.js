
import {randomCardArray} from '../components/MemoryGame/utils';

export const START_MEMORY_GAME = 'START_MEMORY_GAME';
export const SHOW_ALL = 'SHOW_ALL';
export const CLICK_CARD = 'CLICK_CARD';
export const UNFLIP_ALL = 'UNFLIP_ALL';

export const startGame = () => ({type: START_MEMORY_GAME, payload: randomCardArray()});
export const unflipAll = () => ({type: UNFLIP_ALL});
export const showAll = (show) => ({type: SHOW_ALL, show});

export const clickCard = card => (dispatch, getState) => {
  if(getState().memoryGame.pause || card.isMatched || card.isFlipped) {
    //  ignore clicks when paused or card is already turned over
    return;
  }

  dispatch({type: CLICK_CARD, payload:card});
  if (getState().memoryGame.pause) {
    //  flip cards back over if unmatched but give user a little time to see they did not match
    setTimeout(() => {
      dispatch(unflipAll());
    }, 700);    
  }
}

