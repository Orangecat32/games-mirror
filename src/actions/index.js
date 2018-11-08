
export const START_MEMORY_GAME = 'START_MEMORY_GAME';
export const SHOW_ALL = 'SHOW_ALL';
export const CLICK_CARD = 'CLICK_CARD';
export const SELECT_GAME = 'SELECT_GAME';
export const UNFLIP_ALL = 'UNFLIP_ALL';
export const NEW_BOWLING_GAME = 'NEW_BOWLING_GAME';
export const ROLL_BOWLING_BALL = 'ROLL_BOWLING_BALL';

////  bowling game


export function newBowlingGame() {
  return {
    type: NEW_BOWLING_GAME
  }
}

export function rollBowlingBall(availablePins) {
  return {
    type: ROLL_BOWLING_BALL,
    payload: availablePins
  }
}


//// memory game

export function startGame() {
  return {
    type: START_MEMORY_GAME
  }
}

export function unflipAll() {
  return {
    type: UNFLIP_ALL
  }
}

export function showAll(show) {
  return {
    type: SHOW_ALL,
    show:show
  }
}


export function clickCard(card) {
  return {
    type: CLICK_CARD,
    payload:card
  }
}

/// main app

export function selectGame(name) {
  return {
    type: SELECT_GAME,
    payload: name
  }
}