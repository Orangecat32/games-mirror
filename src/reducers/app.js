
  import {SELECT_GAME} from "../actions/index";
     
  export function appReducer(state, action) {
    switch(action.type) {
        case SELECT_GAME:
          return Object.assign({}, state, {selectedGame: action.payload});
        default: return state;
      }
    }