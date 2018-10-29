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
    this.setState({cards: createCards(), matchedIcons: [], flippedIndices: []});
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
        setTimeout(() => this.setState({flippedIndices: []}), 600);
      }
    }
  }

  // returns DOM elements for the cards.  modifies state
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
      <div className="MemoryGameContainer" >
        <div className="InnerGame">
          <div className="GameDescription">
            {gameDescription()}
          </div> 
          { this.state.matchedIcons.length === ICON_COUNT &&
            <div className="GameOver">
              GAME OVER!
            </div>
          }
          <div className="MemoryGameControls">
            <Button text="Restart" onClick={() => this.restart()} />
            <Switch checked={this.state.showAll} label="Show All" style={{marginTop:'6px'}}
              onChange={() => this.setState({showAll: !this.state.showAll})}/>
          </div>
          <div className="GameBoardContainer">
            <div className="GameBoard">
              {this.buildCardDisplay()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const MemoryCard = (props) => {
  const showIcon = props.isMatch || props.isFlipped || props.showAll;
  const cn = `memoryCard ${props.isMatch === true ? 'isMatched' : ''}  ${props.isFlipped ? 'isFlipped' : ''} ${props.isUnmatched ? 'isUnmatched' : ''}`;
  return (
    <div className={cn} onClick={props.onClick}>
      {showIcon &&
        <div className="cardIcon">
          <Icon icon={props.name} iconSize={35}/>
        </div>
      }
    </div>
    )
};


function gameDescription() {
  return (
    <div>
      <h3>Game Rules:</h3>
      <ul>
        <li>At the start of the game, the player is presented with 24 facedown cards.</li>
        <li>On the reverse side of every card is an icon. There are twelve unique icons.</li>
        <li>Play begins with the player clicking a card to reveal the icon.</li>
        <li>The player then clicks another card to reveal a second icon.</li>
        <li>If the icons match, the matched cards are grayed.</li>
        <li>If the icons do not match, the cards are turned facedown.</li>
        <li>The game continues until there are no cards left to match.</li>
        <li>An alternative way to play is by beginning with the cards faceup (using the 'Show All' switch) then turning them facedown after you have memorized the icon positions. </li>
      </ul>
    </div>);
};




export default MemoryGame;