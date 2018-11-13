export const START_MEMORY_GAME = 'START_MEMORY_GAME';
export const SHOW_ALL = 'SHOW_ALL';
export const CLICK_CARD = 'CLICK_CARD';
export const UNFLIP_ALL = 'UNFLIP_ALL';

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

