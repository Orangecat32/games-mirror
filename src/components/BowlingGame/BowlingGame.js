import React from 'react';
import { Button } from "@blueprintjs/core";
import * as test from './test.js';
import {FrameBox} from './FrameBox';
import {BallRoller} from './BallRoller'
import {isGameComplete, currentFrame, framesFromRolls } from './utils.js';
import {gameDescription} from './constants';
import * as styles from './BowlingGame.scss';

export class BowlingGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
   // test.testBowlingScores();
  }

  componentWillMount(props){
    this.initializeState(props);
  }

  initializeState(props) {
    const rolls = props && props.rolls ? props.rolls : []; //test.game150;
    this.setState({frames: framesFromRolls(rolls), rolls });
  }

  addRoll(pins) {
    const rolls = this.state.rolls.concat([pins]);
    this.setState({frames: framesFromRolls(rolls), rolls });
  }

    // returns card elements for rendering
  buildFrameDisplay() {
    const cf = currentFrame(this.state.frames);
    return (this.state.frames || []).map(f => {
        return (
        <FrameBox 
          key={f.frame}
          isCurrent={cf && cf.frame === f.frame} 
          {...f} /> 
      );
    });
  }

  
  render() {
    const gameOver = isGameComplete(this.state.frames);
    const cf = currentFrame(this.state.frames);

    return (
     <div className={styles.gameContainer}>
        <div className={styles.gameDescription}>
          {gameDescription()}
        </div> 
        <div className={styles.gameControls}>
          <div>
            <BallRoller frame={cf} gameOver={gameOver} addRoll={(pins) => this.addRoll(pins)} />
          </div> 
          <Button text="Start new game" onClick={() => this.initializeState()} />
        </div>
        <div className={styles.gameBoardContainer}>
          <div className={styles.gameBoard}>
            {this.buildFrameDisplay()}
          </div>
        </div>
      </div>
    )
  }
}



export default BowlingGame;

