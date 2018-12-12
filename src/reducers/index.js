import {initialState} from '../store';
import { bowlingReducer } from "./bowlingReducer";
import { memoryReducer } from "./memoryReducer";
import {SELECT_GAME} from "../actions/index";

  export function rootReducer(state = initialState, action) {
    return {
      ...state,
      memoryGame: memoryReducer(state.memoryGame, action),
      bowlingGame: bowlingReducer(state.bowlingGame, action),
      selectedGame: action.type === SELECT_GAME ? action.payload : state.selectedGame
    }
  }
  
  export default rootReducer;
