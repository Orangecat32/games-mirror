import {emptyFrames, currentScore, updateFrames} from './utils.js';

// complete game test rolls
const game150 = [8,0,5,5,3,5,8,1,7,1,10,9,1,10,10,8,2,6];
const game65 =  [1,0,0,0,5,0,7,1,0,0,0,10,4,3,1,0,7,2,1,9,10];
const game300 = [10,10,10,10,10,10,10,10,10,10,10,10,10];
const game200 = [10,5,5,10,5,5,10,5,5,10,5,5,10,5,5,10];


test('Game score of 150:', () => {
  expect(testGame(game150)).toBe(150);
});


test('Game score of 200:', () => {
  expect(testGame(game200)).toBe(150);
});


test('Game score of 65:', () => {
  expect(testGame(game65)).toBe(65);
});

// test of the emptyFrames, currentScore and updateFrames functions
const testGame = (rolls) => {
  let frames = emptyFrames();
  rolls.forEach(r => {frames = updateFrames(frames, r);}); 
  return currentScore(frames);
}

export function testBowlingScores() {
  console.log('150:', testGame(game150));  
  console.log('65:', testGame(game65));  
  console.log('300:', testGame(game300)); 
  console.log('200:', testGame(game200));  
}
