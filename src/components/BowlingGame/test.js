import {totalScore } from './utils.js';

// incomplete game test rolls
const gameX = [7,3,9,1,8,2,2,8,9];
const game = [8,0,5,5,3,5,8,1,7,1,10,9,1,10,10,7];

// complete game test rolls
export const game150 = [8,0,5,5,3,5,8,1,7,1,10,9,1,10,10,8,2,6];
export const game65 =  [1,0,0,0,5,0,7,1,0,0,0,10,4,3,1,0,7,2,1,9,10];
export const game300 = [10,10,10,10,10,10,10,10,10,10,10,10,10];
export const game200 = [10,5,5,10,5,5,10,5,5,10,5,5,10,5,5,10];

// TODO: add some real test framework here
export function testBowlingScores() {
  console.log('150:', totalScore(game150));  
  console.log('65:', totalScore(game65));  
  console.log('300:', totalScore(game300)); 
  console.log('200:', totalScore(game200));  
}

