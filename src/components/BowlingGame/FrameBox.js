import React from 'react';

import * as styles from './FrameBox.scss';
import {TENTH_FRAME} from './constants.js';
import {scoreBox1, scoreBox2, scoreBox3} from './utils.js';

export const FrameBox = (props) => {
    return (
      <div className={props.frame !== TENTH_FRAME ? styles.frameBox : styles.lastFrameBox}>
        <div className={styles.frameNumber}>
          {props.frame + 1}
        </div>    
        <div className={styles.markArea}>
          <div className={props.frame !== TENTH_FRAME ? styles.firstBall : styles.firstBox}>
            {scoreBox1(props)} 
          </div>
          <div className={styles.middleBox}>
            {scoreBox2(props)} 
          </div>
          <div className={styles.markBox}>
            {scoreBox3(props)} 
          </div>
        </div>
      <div className={styles.totalScore}>
        {!props.complete || isNaN(props.totalScore) ? '' : props.totalScore}
      </div>
    </div>
  )};

export default FrameBox;
  

  