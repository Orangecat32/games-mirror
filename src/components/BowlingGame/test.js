import {totalScore, getFrames } from './utils.js';

// incomplete game test rolls
const gameX = [7,3,9,1,8,2,2,8,9];
const game = [8,0,5,5,3,5,8,1,7,1,10,9,1,10,10,7];

// complete game test rolls
const game150 = [8,0,5,5,3,5,8,1,7,1,10,9,1,10,10,8,2,6];
const game65 =  [1,0,0,0,5,0,7,1,0,0,0,10,4,3,1,0,7,2,1,9,10];
const game300 = [10,10,10,10,10,10,10,10,10,10,10,10,10];

// TODO: add some real test framework here
function testBowlingScores() {
  let score = totalScore(getFrames(game150));  // should be 150
  score = totalScore(getFrames(game65));  // should be 65
  score = totalScore(getFrames(game300));  // should be 300
}

