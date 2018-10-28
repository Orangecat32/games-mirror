
const SPARE = 1;
const STRIKE = 2;
const UNMARKED = 0;
const TENTH_FRAME = 9;

// class that represents a single frame as displayed on the bowling scorecard
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

// how many pins to display?
export const availablePins = (frame) => {
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


//  returns the frames from the rolls
const getFrames = (rolls) => {
  let frames = [];
  for(let i = 0; i < 10; i++){
    frames.push(new Frame(i));
  }
  
  let ball = 0; //  count of balls rolled per frame
  let f = 0;
  let lastFrame = [0,0,0];

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
  
  if(f1.frame === 8) {
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
  
  return f2 && f2.rolls.length > 0 ? f2.rolls[0] : NaN; 
}
 
//  return the score of frame f1
const scoreFrame = (f1, f2, f3) => {
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

// return the currnt score based on balls rolled
export const totalScore = (frames) => {
   let total = 0;
  
   for(let i = 0; i < 10; i++){
     const fs = scoreFrame(frames[i],frames[i+1],frames[i+2]);
     frames[i].score = fs;
     total += fs;
     frames[i].totalScore = total;
     console.log(`count: ${i}, score:${fs}, total:${total}` );
   }
                         
   return total; 
}  




