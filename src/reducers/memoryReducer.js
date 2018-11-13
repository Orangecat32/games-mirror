import {SHOW_ALL, CLICK_CARD, UNFLIP_ALL, START_MEMORY_GAME} from "../actions/index";
import {createCards, clickCard} from '../components/MemoryGame/utils';


  export function memoryReducer(state, action) {
    switch(action.type) {
      case START_MEMORY_GAME:
        return Object.assign({}, state, {cards: createCards(), memoryClicks: 0}); 
      case UNFLIP_ALL:
        const ufc = state.cards.map(c => c.isFlipped ? Object.assign({}, c , {isFlipped: false}) : c);
        return  Object.assign({}, state, {cards: ufc });
      case CLICK_CARD:
        let newCards = clickCard(state.cards, action.payload);
        const changeCards = (newCards || []).length !== 0;
        return !changeCards ? state : Object.assign({}, state, {cards: newCards, memoryClicks: ++state.memoryClicks});
      case SHOW_ALL:
        return Object.assign({}, state, {showAll: !state.showAll});
      default: return state;
    }
  }
  
  export default memoryReducer;
