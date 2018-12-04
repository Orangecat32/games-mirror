import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import * as memoryGame from './memory';
import * as bowlingGame from './bowling';
import * as appConstants from '../constants';

import reducer from "../reducers";

export const initialState = {
    selectedGame: appConstants.MEMORY_GAME,
    memoryGame: memoryGame.init(),
    bowlingGame: bowlingGame.init()
  };

export const buildStore = () => {
  let middleware = [thunk];

  // turn off the noise here
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
  }

  return createStore(reducer,  applyMiddleware(...middleware));
}