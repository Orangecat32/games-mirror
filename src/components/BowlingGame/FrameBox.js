import React from 'react';

import * as styles from './FrameBox.scss';
import {TENTH_FRAME} from './constants.js';
import {scoreBox1, scoreBox2, scoreBox3} from './utils.js';

export const FrameBox = (props) => {
    return ( 
      <div className={styles.frameBox}  type={props.frame === TENTH_FRAME ? 'tenth' : '' }>
        <div className={styles.frameNumber}>
          {props.frame + 1}
        </div>    
        <div className={styles.markArea}>
          <div className={styles.scoreBox} type={props.frame === TENTH_FRAME ? 'mark-tenth' : '' }>
            {scoreBox1(props)} 
          </div>
          <div className={styles.scoreBox} type={'mark'}>
            {scoreBox2(props)} 
          </div>
          <div className={styles.scoreBox} type={'mark'}>
            {scoreBox3(props)} 
          </div>
        </div>
      <div className={styles.totalScore}>
        {!props.complete || isNaN(props.totalScore) ? '' : props.totalScore}
      </div>
    </div>
  )};

export default FrameBox;
  

  