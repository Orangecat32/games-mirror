
import {randomCardArray} from '../components/MemoryGame/utils';
import {suggestNextCard} from '../components/MemoryGame/autoplay';

export const START_MEMORY_GAME = 'START_MEMORY_GAME';
export const SHOW_ALL = 'SHOW_ALL';
export const CLICK_CARD = 'CLICK_CARD';
export const UNFLIP_ALL = 'UNFLIP_ALL';
export const MEMORY_TOGGLE_RULES = 'MEMORY_TOGGLE_RULES';
export const MEMORY_AUTOPLAY_MODE = 'MEMORY_AUTOPLAY_MODE';

export const startGame = () => ({type: START_MEMORY_GAME, payload: randomCardArray()});
export const unflipAll = () => ({type: UNFLIP_ALL});
export const showAll = (show) => ({type: SHOW_ALL, show});
export const memoryToggleRules = () => ({type: MEMORY_TOGGLE_RULES});

export const clickCard = card => (dispatch, getState) => {
  if(getState().memoryGame.pause || card.isMatched || card.isFlipped) {
    //  ignore clicks when paused or card is already turned over
    return;
  }

  //console.log('suggest', suggestNextCard(getState().memoryGame.cards));

  dispatch({type: CLICK_CARD, payload:card});
  if (getState().memoryGame.pause) {
    //  flip cards back over if unmatched but give user a little time to see they did not match
    setTimeout(() => {
      dispatch(unflipAll());
    }, 700);    
  }
}


export const autoplayMode = mode => (dispatch, getState) => {
  const s = getState().memoryGame;
  dispatch({type: MEMORY_AUTOPLAY_MODE, payload: s.autoplayMode});
}
