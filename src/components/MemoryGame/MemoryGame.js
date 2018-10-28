import React from 'react';
import PropTypes from 'prop-types'; 
import { Icon, Button, Switch ,Classes } from "@blueprintjs/core";

//import styles from './MemoryGame.scss';  // why did this not work? webpack issue?
import './MemoryGame.scss';
import {createCards, ICON_COUNT } from './utils.js';

export class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  componentWillMount(props){
    console.log('mount');
    this.restart();
  }

  restart() {
    this.setState({cards: createCards(), matchedIcons: [], flippedIndices: [], showAll:false});
  }

  isMatch(card) {
    return (this.state.matchedIcons || []).some(name => name === card.name);
  }

  isFlipped(card) {
    return (this.state.flippedIndices || []).some(name => name === card.index);
  }

  //  return true if this is the card that is the second flip and it is not a match for the first
  isUnmatched(card) {
    if(this.state.flippedIndices.length === 2 && card.index === this.state.flippedIndices[1]) {
      const j = this.state.flippedIndices[0];
      const k = this.state.flippedIndices[1];
      const name1 = this.state.cards.find(c => c.index === j).name;
      const name2 = this.state.cards.find(c => c.index === k).name;
      return name1 !== name2;
    } 

    return false;
  }

  clickCard(card) {
    if(this.isFlipped(card) || this.isMatch(card)) {
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

  render() {
    const cards = (this.state.cards || []).map(card => {
      const isMatch = this.isMatch(card);
      const isFlipped = this.isFlipped(card);
      const isUnmatched = this.isUnmatched(card);
    
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
            {cards}
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


// <div className={`${styles.layout} `}> //should have worked??

export default MemoryGame;