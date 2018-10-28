import React from 'react';
import PropTypes from 'prop-types'; 
import { Icon, Button, Switch } from "@blueprintjs/core";
import {createCards, ICON_COUNT, isMatchedCard, isFlippedCard, isUnmatchedCard } from './utils.js';
import './MemoryGame.scss';

export class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  componentWillMount(props){
    console.log('mount');
    this.restart();
  }

  // note: this function modifies state
  restart() {
    this.setState({cards: createCards(), matchedIcons: [], flippedIndices: [], showAll:false});
  }

  // note: this function modifies state
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
        setTimeout(() => this.setState({flippedIndices: []}), 1000);
      }
    }
  }

  // returns DOM elements for the cards
  buildCardDisplay() {
    return (this.state.cards || []).map(card => {
      const isMatch = isMatchedCard(this.state.matchedIcons, card);
      const isFlipped = isFlippedCard(this.state.flippedIndices, card);
      const isUnmatched = isUnmatchedCard(this.state.cards, this.state.flippedIndices, card);
    
      return (
        <div> 
          <div key={card.index} onClick={() => this.clickCard(card)}>
            <MemoryCard 
              showAll={this.state.showAll}
              isFlipped={isFlipped} 
              isMatch={isMatch} 
              isUnmatched={isUnmatched}
              {...card} /> 
          </div>
        </div>);
    });
  }

  render() {
    return (
      <div className="MemoryGameContainer">
        <div className="InnerGame">
          <div className="GameDescription">
            Object of the game: Try to match the images 
          </div> 
          { this.state.matchedIcons.length === ICON_COUNT &&
            <div className="GameOver">
              GAME OVER!
            </div>
          }
          <div className="MemoryGameControls">
            <Button text="Restart" onClick={() => this.restart()} minimal />
            <Switch checked={this.state.showAll} label="Show All" onChange={() => this.setState({showAll: !this.state.showAll})}/>
          </div>
          <div className="GameBoard">
            {this.buildCardDisplay()}
          </div>
        </div>
      </div>
    );
  }
}



const MemoryCard: React.SFC = (props) => {
  const showIcon = props.isMatch || props.isFlipped || props.showAll;
  const cn = `memoryCard ${props.isMatch === true ? 'isMatched' : ''}  ${props.isFlipped ? 'isFlipped' : ''} ${props.isUnmatched ? 'isUnmatched' : ''}`;
  return (
    <div className={cn}>
      {showIcon &&
        <div className="cardIcon">
          <Icon icon={props.name} iconSize={35}/>
        </div>
      }
    </div>
    )
};

export default MemoryGame;