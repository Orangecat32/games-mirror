import React from 'react';
import PropTypes from 'prop-types'; 


import {FrameBox} from './FrameBox';
import {GameControl} from './gameControl/GameControl';
import {Rules} from '../../shared/components/GameRules/Rules.js';
import {currentFrame } from './utils.js';
import {gameDescription} from './constants';
import * as styles from './BowlingGame.scss';

export class BowlingGame extends React.Component {
  render() {
    const frames = this.props.frames; 
    const cf = currentFrame(frames);

    return (
     <div className={styles.container}>
        <Rules content={gameDescription()} show={this.props.showRules}/>
        <GameControl {...this.props} />
        <div className={styles.gameBoardContainer}>
          {
            (frames || []).map(f => (
              <FrameBox key={f.frame} isCurrent={cf && cf.frame === f.frame} {...f} /> 
            ))
          }
        </div>
      </div>
    )
  }
}

BowlingGame.propTypes = {
  rolls: PropTypes.array,
  rollBowlingBall: PropTypes.func,
  newBowlingGame: PropTypes.func
}

export default BowlingGame;
