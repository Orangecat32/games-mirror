
import {UNMARKED, TENTH_FRAME, NINETH_FRAME, STRIKE, SPARE} from './constants.js';

const STRIKE_CHAR = 'X';
const SPARE_CHAR = '/';
const GUTTERBALL_CHAR = '-';


// Frame class represents a single frame as displayed on the bowling scorecard
// there will be ten of these per game
class Frame {
  constructor(num){
    this.frame = num;
    this.rolls = [];
    this.mark = UNMARKED;
  }
  
  addRoll(r) {
    if(!this.complete) {
      this.rolls.push(r);
      this.setMark();  
      
      this.complete = this.frame === TENTH_FRAME && this.mark !== UNMARKED
        ? this.rolls.length === 3
        : this.mark === STRIKE || this.rolls.length === 2; 
    }
  }
  
   // mark based on first two rolls.  
   setMark() {
     this.mark = this.rolls[0] === 10
      ? STRIKE
      : this.rolls[0] + this.rolls[1] === 10 ? SPARE : UNMARKED;
   }

}

export const scoreBox1 = (frame) => {
  if(frame.frame === TENTH_FRAME && frame.rolls.length > 0) {
    return frame.mark === STRIKE ? STRIKE_CHAR : frame.rolls[0] === 0 ? GUTTERBALL_CHAR : frame.rolls[0];
  }

  return '';
 }

export const scoreBox2 = (frame) => {
  if(frame.rolls.length === 0)
    return '';

  if(frame.frame === TENTH_FRAME){
   return frame.mark === SPARE ? SPARE_CHAR 
    : frame.rolls[1] === 10 ? STRIKE_CHAR 
    : frame.rolls[1] === 0  ? GUTTERBALL_CHAR 
    : frame.rolls[1]; 
  } else {
    return frame.mark === STRIKE ? STRIKE_CHAR : frame.rolls[0] === 0 ? GUTTERBALL_CHAR : frame.rolls[0];
  }
}

export const scoreBox3 = (frame) => {
  if(frame.rolls.length === 0)
    return '';
  
  if(frame.frame === TENTH_FRAME) {
    switch(frame.mark) {
      default:
        return '';
      case STRIKE:
        return frame.rolls[2] === 10 ? STRIKE_CHAR 
        : frame.rolls[1] + frame.rolls[2] === 10 ? SPARE_CHAR 
        : frame.rolls[2] === 0 ? GUTTERBALL_CHAR : frame.rolls[2];
      case SPARE:
        return frame.rolls[2] === 10 ? STRIKE_CHAR : frame.rolls[2] ;
    }
  } else {   
    switch(frame.mark) {
      default:
        return frame.rolls[1] === 0 ? GUTTERBALL_CHAR : frame.rolls[1];
      case STRIKE:
        return '';
      case SPARE:
        return SPARE_CHAR;
    }
  }
}

// how many pins to display?
export const availablePins = (frame) => {
  if(!frame)
    return 0;

  if(frame.rolls.length === 0)
    return 10;
  
  if(frame.frame === TENTH_FRAME){
    if(frame.rolls.length === 1) {
      return frame.rolls[0] === 10 ? 10 : 10 - frame.rolls[0];
    }
    
    // possible third roll in 10th frame
    return frame.mark === STRIKE 
      ? frame.rolls[1] === 10 ? 10 : 10 - frame.rolls[1]
      : frame.mark === SPARE ? 10 : null; 
  }
  
  return 10 - frame.rolls[0];
}

export const currentFrame = (frames) => frames.find(f => !f.complete);

//  returns the frames from the rolls
const getFrames = (rolls) => {
  let frames = [];
  for(let i = 0; i < 10; i++){
    frames.push(new Frame(i));
  }
  
  let ball = 0; //  count of balls rolled per frame
  let f = 0;    //  index of the current frame
  let lastFrame = [0, 0, 0];

  (rolls || []).forEach(pins => {
    let frame = frames[f];
    frame.addRoll(pins);
    
    if(f === TENTH_FRAME) {
     //  last frame is special because the player might get three rolls
     lastFrame[ball] = pins;
     if(ball === 2 || (ball === 1 && lastFrame[0] + lastFrame[1] < 9)) {
      console.log('score complete') 
    }      
    ball++;
   } else { 
     if(pins === 10 || ball === 1) {
      f++;
      ball = 0;
    } else {
     ball++;
    } 
  }});

  return frames;
} 
 
//  return the score from next two rolls when users rolls a strike
const nextTwoRolls = (f1, f2, f3) => {
  if(f1.frame === TENTH_FRAME) {
    return f1.rolls[1] + f1.rolls[2];
  }
  
  if(f1.frame === NINETH_FRAME) {
      // next to last frame
    if(f2.mark === STRIKE) {
      //  strike in last frame
      return 10 + f2.rolls[1];
    }
    
    return f2.rolls[0] + f2.rolls[1];
  }
  
  if(f2.mark === STRIKE) {
    return f3 ? 10 + f3.rolls[0] : 0;
  }
  
  return f2.rolls[0] + f2.rolls[1];
}

//  return the score from next roll when user rolls a spare
const nextRoll = (f1, f2) => {
  if(f1.frame === TENTH_FRAME) {
      // last frame
    return f1.rolls[2];
  }
  
  return f2 && f2.rolls.length > 0 ? f2.rolls[0] : undefined; 
}

export const isGameComplete = (frames) => frames[TENTH_FRAME].complete === true;
 
//  return the score of frame f1
export const scoreFrame = (f1, f2, f3) => {
  if(f1.complete) {
    switch(f1.mark) {
      case STRIKE:
        //  we rolled a strike
        return 10 + nextTwoRolls(f1, f2, f3);
      case SPARE:
        //  we rolled a spare  
        return 10 + nextRoll(f1,f2);
      default:
        return f1.rolls[0] + f1.rolls[1];
    }  
  }

  return NaN;
}

export const framesFromRolls = (rolls) => {
    let frames = getFrames(rolls);
    let total = 0;
    for(let i = 0; i < 10; i++){
      const fs = scoreFrame(frames[i],frames[i+1],frames[i+2]);
      frames[i].score = fs;
      total += fs;
      frames[i].totalScore = total;
    //  console.log(`count: ${i}, score:${fs}, total:${total}`, frames[i]);
    }

    return frames;
}

// return the current total score based on balls rolled by checking the last complete frame
export const totalScore = (rolls) => framesFromRolls(rolls).reverse().find(f => f.complete).totalScore;                  




