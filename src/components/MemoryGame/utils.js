import {ICON_COUNT, iconNames} from './constants';
import {randomArray} from '../../shared/utils';

// build the cards array. 
export const createCards = (randomArray) => {
  let cards = [];
  for(let i = 0, n = 0; i < ICON_COUNT; i++){
    cards.push({index:n++, name:iconNames[i]});
    cards.push({index:n++, name:iconNames[i]});
  }

  // shuffle the cards based upon the input random array (comes from the function below )
  let randomCards = [];
  for(let i = 0; i < ICON_COUNT * 2; i++){
    randomCards[randomArray[i] - 1] = cards[i];
  }

  return randomCards;
}

export const randomCardArray = () => randomArray(ICON_COUNT * 2);


export const clickCard = (cards, card) => {
  // ignore click if card already turned over or there are two flipped cards already
  if (card.isFlipped || card.isMatched || hasUnmatched(cards)) {
    return null;
  }

  // is there another flipped card?
  const flippedCard = cards.find(c => c.isFlipped);
  if(flippedCard === undefined){
    //  user clicked on the first card when looking for match, turn card face up
    return cards.map(c => c.index === card.index ? Object.assign({}, c , {isFlipped: true, isMatched: false}) : c);
  }

  if(flippedCard.name === card.name) {
    // user matched the card, set flipped and matched for those 2 matching cards
    return cards.map(c => c.name === card.name ? Object.assign({}, c , {isFlipped: false, isMatched: true}) : c);
  } 
  
  // turn over the second card (no match)
  return cards.map(c => c.index === card.index ? Object.assign({}, c , {isFlipped: true, isMatched: false}) : c);
}

export const hasUnmatched = (cards) => cards.filter((c) => c.isFlipped && !c.isMatched).length === 2;
