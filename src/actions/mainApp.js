export const SELECT_GAME = 'SELECT_GAME';


/// main app

export function selectGame(name) {
  return {
    type: SELECT_GAME,
    payload: name
  }
}

