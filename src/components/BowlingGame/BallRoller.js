import React from 'react';
import { Button } from "@blueprintjs/core";

import * as styles from './BallRoller.scss';
import {availablePins} from './utils.js';

export const BallRoller = (props) => {
  const frame = props.frame;
  const pins = Array.from({length: availablePins(frame) + 1}, (v, k) => k++)
                    .map(p => <Button 
                                text={p} 
                                key={p} 
                                onClick={() => props.addRoll(p)} 
                              /> );

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
            {pins}
          </div>
        </div>
       </div>
      }
    </div>
    )
  };

export default BallRoller;
