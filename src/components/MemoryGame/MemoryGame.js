import React from 'react';
import PropTypes from 'prop-types'; 

import { Icon, Button, Switch } from "@blueprintjs/core";
import {gameDescription} from './constants';
import styles from './MemoryGame.scss';
import {Rules} from '../../shared/components/GameRules/Rules.js';

export class MemoryGame extends React.Component {
  render() {
    const isGameOver = !this.props.cards.find(c => !c.isMatched);
    return (
      <div className={styles.container} >
        <Rules content={gameDescription()} />
        { isGameOver &&
          <div className={styles.gameOver}>
            GAME OVER!
          </div>
        }
        <div className={styles.memoryGameControls}>
          <Button text="Restart" onClick={() => this.props.appActions.startGame()} />
          {`Click Count: ${this.props.clickCount}`}
          <Switch checked={this.props.showAll} label="Show All" style={{marginTop:'6px'}}
            onChange={() => this.props.appActions.showAll()}/>
        </div>
        <div className={styles.gameBoardContainer}>
          <div className={styles.gameBoard}>
            {(this.props.cards || []).map(card => (
              <MemoryCard 
                key={card.index}
                showAll={this.props.showAll}
                onClick={ ()=> this.props.appActions.clickCard(card)} 
                {...card} /> 
            ))}
          </div>
        </div>
      </div>
    );
  }
}


const MemoryCard = (props) => {
  const showIcon = props.isMatched || props.isFlipped || props.showAll;
  const iconClass = `${styles.cardIcon} ${props.isFlipped ? styles.flipped : props.isMatched ? styles.matched : ''}`;

  return (
    <div className={styles.memoryCard} onClick={props.onClick}>
      {showIcon &&
        <div className={iconClass} >
          <Icon icon={props.name}  iconSize={'calc(6vmin)'}  />
        </div>
      }
    </div>
    )
};

MemoryGame.propTypes = {
  showAll: PropTypes.bool,
  cards: PropTypes.array,
  onClick: PropTypes.func,
  unflipAll: PropTypes.func
};

export default MemoryGame;
