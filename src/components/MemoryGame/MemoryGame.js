import React from 'react';

import { Icon, Button, Switch } from "@blueprintjs/core";
import {createCards, isMatchedCard, isFlippedCard, isUnmatchedCard } from './utils.js';
import {gameDescription, ICON_COUNT} from './constants';
import styles from './MemoryGame.scss';

export class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  componentWillMount(props){
    this.initializeState();
  }

   initializeState() {
    this.setState({cards: createCards(), matchedIcons: [], flippedIndices: []});
  }

  // this function modifies state after user clicks a card
  clickCard(card) {
    if(isFlippedCard(this.state.flippedIndices, card) || isMatchedCard(this.state.matchedIcons, card)) {
      return; //  do nothing if user clicks on an exposed card
    }

    if((this.state.flippedIndices || []).length === 0) {
      //  user clicked on the first card when looking for match, turn card face up
      this.setState({flippedIndices: [card.index]});
      return;
    }

    if((this.state.flippedIndices || []).length === 1) {
      // user clicked on the second card when looking for a match
      const previousName = this.state.cards.find(c => c.index === this.state.flippedIndices[0]).name;
      if(previousName === card.name) {
        // user matched the card, add to the matched card list
        this.setState({matchedIcons: this.state.matchedIcons.concat([previousName]), flippedIndices: []});
      } else {
        // user failed to match, flip over the card
        this.setState({flippedIndices: this.state.flippedIndices.concat([card.index])});
        // give user a little time to recognize they did not get the match, then turn those two cards face down
        setTimeout(() => this.setState({flippedIndices: []}), 600);
      }
    }
  }

  // returns card elements for rendering
  buildCardDisplay() {
    return (this.state.cards || []).map(card => {
      const isMatch = isMatchedCard(this.state.matchedIcons, card);
      const isFlipped = isFlippedCard(this.state.flippedIndices, card);
      const isUnmatched = isUnmatchedCard(this.state.cards, this.state.flippedIndices, card);
    
      return (
        <MemoryCard 
          key={card.index}
          showAll={this.state.showAll}
          isFlipped={isFlipped} 
          isMatch={isMatch} 
          isUnmatched={isUnmatched}
          onClick={() => this.clickCard(card)}
          {...card} /> 
      );
    });
  }

  render() {
    return (
      <div className={styles.memoryGameContainer} >
          <div className={styles.gameDescription}>
            {gameDescription()}
          </div> 
          { this.state.matchedIcons.length === ICON_COUNT &&
            <div className={styles.gameOver}>
              GAME OVER!
            </div>
          }
          <div className={styles.memoryGameControls}>
            <Button text="Restart" onClick={() => this.initializeState()} />
            <Switch checked={this.state.showAll} label="Show All" style={{marginTop:'6px'}}
              onChange={() => this.setState({showAll: !this.state.showAll})}/>
          </div>
          <div className={styles.gameBoardContainer}>
            <div className={styles.gameBoard}>
              {this.buildCardDisplay()}
            </div>
          </div>
      </div>
    );
  }
}


const MemoryCard = (props) => {
  const showIcon = props.isMatch || props.isFlipped || props.showAll;
  const cardType = `${props.isFlipped ? 'flipped' : props.isMatch ? 'matched' : undefined}`;

  return (
    <div className={styles.memoryCard} onClick={props.onClick}>
      {showIcon &&
        <div className={styles.cardIcon} type={cardType} >
          <Icon icon={props.name}  iconSize={'calc(2.5vw + 2px)'}  />
        </div>
      }
    </div>
    )
};

export default MemoryGame;
