import React from 'react';
import PropTypes from 'prop-types'; 

import {hasTwoFlipped} from './utils'
import { Icon, Button, Switch } from "@blueprintjs/core";
import {gameDescription} from './constants';
import styles from './MemoryGame.scss';

export class MemoryGame extends React.Component {

  componentDidUpdate() {
    if (hasTwoFlipped(this.props.cards)) {
      //  flip cards back over if unmatched but give user a little time to see they did not match
      setTimeout(() => {
        this.props.appActions.unflipAll();
       }, 700);    
    }
  }

  render() {
    const isGameOver = !this.props.cards.find(c => c.isMatched !== true);
    return (
      <div className={styles.memoryGameContainer} >
        <div className={styles.gameDescription}>
          {gameDescription()}
        </div> 
        { isGameOver &&
          <div className={styles.gameOver}>
            GAME OVER!
          </div>
        }
        <div className={styles.memoryGameControls}>
          <Button text="Restart" onClick={() => this.props.appActions.startGame()} />
          {`Click Count: ${this.props.memoryClicks}`}
          <Switch checked={this.props.showAll} label="Show All" style={{marginTop:'6px'}}
            onChange={() => this.props.appActions.showAll()}/>
        </div>
        <div className={styles.gameBoardContainer}>
          <div className={styles.gameBoard}>
            {buildCardDisplay(this.props.cards, this.props.showAll, this.props.appActions.clickCard)}
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
          <Icon icon={props.name}  iconSize={'calc(2.5vw + 2px)'}  />
        </div>
      }
    </div>
    )
};


  // returns card elements for rendering
const buildCardDisplay = (cards, showAll, onClick) => {
    return (cards || []).map(card => (
        <MemoryCard 
          key={card.index}
          showAll={showAll}
          onClick={ ()=> onClick(card)} 
          {...card} /> 
      ))
  }

MemoryGame.propTypes = {
  showAll: PropTypes.bool,
  cards: PropTypes.array,
  onClick: PropTypes.func,
  unflipAll: PropTypes.func
};

export default MemoryGame;
