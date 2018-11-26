import {SHOW_ALL, CLICK_CARD, UNFLIP_ALL, START_MEMORY_GAME, MEMORY_TOGGLE_RULES} from "../actions/index";
import {createCards, clickCard, hasUnmatched} from '../components/MemoryGame/utils';


  export function memoryReducer(state, action) {
    switch(action.type) {
      case START_MEMORY_GAME:
        return Object.assign({}, state, {cards: createCards(action.payload), clickCount: 0, pause: false}); 
      case UNFLIP_ALL:
        const ufc = state.cards.map(c => c.isFlipped ? Object.assign({}, c , {isFlipped: false}) : c);
        return  Object.assign({}, state, {cards: ufc, pause: false });
      case CLICK_CARD:
        const clickedCard = action.payload;
        const newCards = clickCard(state.cards, clickedCard);
        const hasChanged = (newCards || []).length !== 0;
        const unmatched = hasUnmatched(newCards);
        return !hasChanged ? state : Object.assign({}, state, 
          {
            cards: newCards, 
            clickCount: state.clickCount + 1, 
            pause: unmatched, 
            history: state.history.concat(clickedCard)
          });
      case SHOW_ALL:
        return Object.assign({}, state, {showAll: !state.showAll});
      case MEMORY_TOGGLE_RULES:
        return Object.assign({}, state, {showRules: !state.showRules});
      default: 
        return state;
    }
  }
  
  export default memoryReducer;
