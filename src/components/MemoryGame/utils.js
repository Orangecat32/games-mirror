import {ICON_COUNT, iconNames} from './constants';

// build the cards array. Note:  not pure because returns cards in random locations
export const createCards = () => {
  let cards = [];
  for(let i = 0, n = 0; i < ICON_COUNT; i++){
    cards.push({index:n++, name:iconNames[i]});
    cards.push({index:n++, name:iconNames[i]});
  }

  // shuffle the cards
  const randomIndices = randomArray(ICON_COUNT * 2);
  let randomCards = [];
  for(let i = 0; i < ICON_COUNT * 2; i++){
    randomCards[randomIndices[i] - 1] = cards[i];
  }

  return randomCards;
}

// return array of unique numbers between 1 and length (inclusive) in random order
function randomArray(length){
  let arr = []
  while(arr.length < length){
      var randomnumber = Math.floor(Math.random()*length) + 1;
      if(arr.indexOf(randomnumber) > -1) 
        continue;
      arr[arr.length] = randomnumber;
  }
  return arr;
}

export const hasTwoFlipped = (cards) => cards.filter(c => c.isFlipped).length === 2; 

export const clickCard = (cards, card) => {
  // ignore click if card already turned over or there are two flipped cards already
  if (card.isFlipped || card.isMatched || hasTwoFlipped(cards)) {
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

