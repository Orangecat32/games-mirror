import React from 'react';
import { Button } from "@blueprintjs/core";

import * as styles from './BallRoller.scss';
import {availablePins} from './utils.js';

const buildDisplay = (pins, addRoll) => {
    let possibleRolls = [];
    for(let i = 0; i <= pins; i++)
        possibleRolls.push(i);
   
    return possibleRolls.map(p => <Button text={p} key={p} onClick={() => addRoll(p)} /> );
}

export const BallRoller = (props) => {
  const frame = props.frame;
  const pins = availablePins(frame);

  return (
    <div className={styles.container}>
      { props.gameOver &&
          <div className={styles.gameOver}>
            GAME OVER!
          </div>
      }
      { !props.gameOver &&
      <div className={styles.buttonContainer}>
        <div className={styles.title}>
         {`Frame ${frame.frame + 1}, Ball ${frame.rolls.length + 1}  `}   
        </div>
        <div>
          <div className={styles.pinSelector}>
            {'Click the number of pins to knock down'}
          </div> 
          <div className={styles.frameBox} >
          {buildDisplay(pins, props.addRoll)}
          </div>
        </div>
       </div>
      }
    </div>
    )
  };

export default BallRoller;
