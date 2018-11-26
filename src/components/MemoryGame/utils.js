import {ICON_COUNT, iconNames} from './constants';
import {randomArray} from '../../shared/utils';

// build the cards array. 
export const createCards = (randomArray) => {
  let cards = [];
  for(let i = 0, n = 0; i < ICON_COUNT; i++){
    cards.push({index:n++, name:iconNames[i], exposedClicks: []});
    cards.push({index:n++, name:iconNames[i], exposedClicks: []});
  }

  // shuffle the cards based upon the input random array (comes from the function below )
  let randomCards = [];
  for(let i = 0; i < ICON_COUNT * 2; i++){
    randomCards[randomArray[i] - 1] = cards[i];
  }

  return randomCards;
}

export const randomCardArray = () => randomArray(ICON_COUNT * 2);


export const clickCard = (cards, thisCard, clickCount) => {

  if (thisCard.isFlipped || thisCard.isMatched || hasUnmatched(cards)) {
    // ignore click if card already turned over or there are two flipped cards already
    return null;
  }

  // note: prop exposedClicks records how many times this card was exposed before it was matched

  const flippedCard = cards.find(c => c.isFlipped); // is there another flipped card?
    if(flippedCard === undefined){
      // there is not another face up unmatched card
      // user clicked on the first card when looking for match, turn card face up
      const cc = Object.assign({}, thisCard , {
        exposedClicks : thisCard.exposedClicks.concat(clickCount),
        isFlipped: true, 
        isMatched: false});

      const newCards = cards.map(c => c.index === cc.index ? cc : c);
      return {cards: newCards, clickedCard: cc };
    }

  if(flippedCard.name === thisCard.name) {
    // user matched the card, set flipped and matched for those 2 matching cards
    const cc = Object.assign({}, thisCard , {isFlipped: false, isMatched: true }) ;
    const newCards = cards.map(c => c.name !== thisCard.name 
        ? c 
        : Object.assign({}, c.index === thisCard.index ? cc : c , {isFlipped: false, isMatched: true}));
    return {cards: newCards, clickedCard: cc };
  }
  
  // turn over the second card (no match)
  const cc = Object.assign({}, thisCard , {
    exposedClicks : thisCard.exposedClicks.concat(clickCount),
    isFlipped: true, 
    isMatched: false
  });

  return {cards: cards.map(c => c.index === cc.index ? cc : c), clickedCard: cc };
}

export const hasUnmatched = (cards) => cards.filter((c) => c.isFlipped && !c.isMatched).length === 2;

//  unfinished.  usage:  gameScore(state.memoryGame.history)
export const gameScore = (clickHistory) => {
  // TODO: compute how well this user performed based upon the click history
  // work in progress

  let matches = [];
  for(let i = 0; i < clickHistory.length; i++) {
    if(clickHistory[i].isMatched){
      matches.push({
          name: clickHistory[i].name,
          first: clickHistory[i-1].exposedClicks.length, 
          second: clickHistory[i].exposedClicks.length,
          matchCount: matches.length
        });
    }
  }

  console.log('matches:', matches);

  const result = {
    luck: matches.filter(m => m.second === 0 && m.matchCount < 11).map(p => p.name), 
    last: matches.filter(m => m.matchCount === 11).map(p => p.name),  
    perfect: matches.filter(m => m.second === 1 && m.matchCount < 11).map(p => p.name),  
    level1: matches.filter(m => m.second === 2 && m.matchCount < 11).map(p => p.name),  
    level2: matches.filter(m => m.second > 2 && m.matchCount < 11).map(p => p.name),  
  }

  console.log('result:', result);
  return 0;
}

