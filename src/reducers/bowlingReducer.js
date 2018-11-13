import {ROLL_BOWLING_BALL, NEW_BOWLING_GAME} from "../actions/index";
import {updateFrames, emptyFrames} from '../components/BowlingGame/utils';

export function bowlingReducer(state, action) {
  switch(action.type) {
    case NEW_BOWLING_GAME:
      return  Object.assign({}, state, {frames: emptyFrames()});
    case ROLL_BOWLING_BALL:
      return  Object.assign({}, state, {frames: updateFrames(state.frames, action.payload) });
    default:
      return state;
  }
}