import {initialState} from '../store';
import { bowlingReducer } from "./bowlingReducer";
import { memoryReducer } from "./memoryReducer";
import { appReducer } from "./app";

//  todo: refactor like this https://redux.js.org/recipes/structuringreducers/refactoringreducersexample
  export function gameRoomReducer(state = initialState, action) {
    state = memoryReducer(state, action);
    state = bowlingReducer(state, action);
    state = appReducer(state, action);
    return state;
  }
  
  export default gameRoomReducer;
