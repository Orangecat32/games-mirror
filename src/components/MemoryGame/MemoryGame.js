import React from 'react';
import PropTypes from 'prop-types'; 

import {gameDescription} from './constants';
import {GameControl} from './GameControl/GameControl';
import {Gameboard} from './Gameboard/Gameboard';
import styles from './MemoryGame.scss';
import {Rules} from '../../shared/components/GameRules/Rules.js';
import {isGameComplete} from './utils'

export class MemoryGame extends React.Component {
  render() {
    return (
      <div className={styles.container} >
        <div className={styles.rulesContainer}>
          <Rules content={gameDescription()} show={this.props.showRules} onClick={() => this.props.appActions.memoryToggleRules()}/>   
        </div>
        { isGameComplete(this.props.cards)  &&
          <div className={styles.gameOver}>
            GAME OVER!
          </div>
        }
        <GameControl {...this.props} />
        <Gameboard {...this.props} />
      </div>
    );
  }
}

MemoryGame.propTypes = {
  showAll: PropTypes.bool,
  cards: PropTypes.array,
  onClick: PropTypes.func,
  unflipAll: PropTypes.func,
  autoplayMode: PropTypes.bool,
  showRules: PropTypes.bool,
  memoryToggleRules: PropTypes.func
};

export default MemoryGame;
