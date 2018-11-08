import {START_MEMORY_GAME, SHOW_ALL, SELECT_GAME, CLICK_CARD, UNFLIP_ALL,ROLL_BOWLING_BALL, NEW_BOWLING_GAME} from "../actions/index";
import {createCards, clickCard} from '../components/MemoryGame/utils';
import {updateFrames, emptyFrames} from '../components/BowlingGame/utils';
import {initialState} from '../store';

  export function gameRoomReducer(state = initialState, action) {
    switch(action.type) {
      case NEW_BOWLING_GAME:
        return  Object.assign({}, state, {frames: emptyFrames()});
      case ROLL_BOWLING_BALL:
        return  Object.assign({}, state, {frames: updateFrames(state.frames, action.payload) });
      case UNFLIP_ALL:
        const ufc = state.cards.map(c => c.isFlipped ? Object.assign({}, c , {isFlipped: false}) : c);
        return  Object.assign({}, state, {cards: ufc });
      case CLICK_CARD:
        let newCards = clickCard(state.cards, action.payload);
        const changeCards = (newCards || []).length !== 0;
        return !changeCards ? state : Object.assign({}, state, {cards: newCards, memoryClicks: ++state.memoryClicks});
      case SELECT_GAME:
        return Object.assign({}, state, {selectedGame: action.payload});
      case START_MEMORY_GAME:
        return Object.assign({}, state, {cards: createCards(), memoryClicks: 0});
      case SHOW_ALL:
        return Object.assign({}, state, {showAll: !state.showAll});
      default: return state;
    }
  }
  
  export default gameRoomReducer;
