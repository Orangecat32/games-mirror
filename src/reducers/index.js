import {initialState} from '../store';
import { bowlingReducer } from "./bowlingReducer";
import { memoryReducer } from "./memoryReducer";
import {SELECT_GAME} from "../actions/index";

  export function gameRoomReducer(state = initialState, action) {
    return {
      memoryGame: memoryReducer(state.memoryGame, action),
      bowlingGame: bowlingReducer(state.bowlingGame, action),
      selectedGame: action.type === SELECT_GAME ? action.payload : state.selectedGame
    }
  }
  
  export default gameRoomReducer;
