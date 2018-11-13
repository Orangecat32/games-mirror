export const NEW_BOWLING_GAME = 'NEW_BOWLING_GAME';
export const ROLL_BOWLING_BALL = 'ROLL_BOWLING_BALL';

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
