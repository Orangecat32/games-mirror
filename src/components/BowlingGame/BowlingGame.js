import React from 'react';
import PropTypes from 'prop-types'; 

import { Button } from "@blueprintjs/core";
import {FrameBox} from './FrameBox';
import {BallRoller} from './BallRoller'
import {isGameComplete, currentFrame } from './utils.js';
import {gameDescription} from './constants';
import * as styles from './BowlingGame.scss';

export class BowlingGame extends React.Component {
  render() {
    const frames = this.props.frames; 
    const gameOver = isGameComplete(frames);
    const cf = currentFrame(frames);

    return (
     <div className={styles.gameContainer}>
        <div className={styles.gameDescription}>
          {gameDescription()}
        </div> 
        <div className={styles.gameControls}>
          <div>
            <BallRoller frame={cf} gameOver={gameOver} addRoll={(pins) => this.props.appActions.rollBowlingBall(pins)} />
          </div> 
          <Button text="Start new game" onClick={() => this.props.appActions.newBowlingGame()} />
        </div>
        <div className={styles.gameBoardContainer}>
          {buildFrameDisplay(frames)}
        </div>
      </div>
    )
  }
}

  // returns frame elements for rendering
  const buildFrameDisplay = (frames) => {
    const cf = currentFrame(frames);
    return (frames || []).map(f => (
        <FrameBox 
          key={f.frame}
          isCurrent={cf && cf.frame === f.frame} 
          {...f} /> 
      )
    );
  }


BowlingGame.propTypes = {
  rolls: PropTypes.array,
  rollBowlingBall: PropTypes.func,
  newBowlingGame: PropTypes.func
}

export default BowlingGame;
