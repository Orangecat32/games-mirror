// utility functions for autoplay feature

export const exposedMatchedPair = (cards) => {
  // if there are two matching cards that are currently face down, return those two cards
  let items = {};
  cards.forEach(c => {
    if(c.exposedClicks.length > 0 && !c.isMatched) {
      if(items.hasOwnProperty(c.name))
        items[c.name].second = c;
      else {
        items[c.name] = {first: c};
      }
    }
  });

  // find all unmatched where both cards are previously exposed 
  const k = Object.values(items).filter(p => p.second);
  //return the first pair
  return k.length ? k[0] : null;
} 

export const nextUnexposed = (cards, card = null) => {
  // return first card that has not been exposed
  // if card supplied, exclude that card
  return card 
    ? cards.find(c => c.exposedClicks.length === 0 && !c.isMatched && !c.isFlipped && card.index !== c.index)
    : cards.find(c => c.exposedClicks.length === 0 && !c.isMatched && !c.isFlipped); 
} 


export const secondCard = (cards, firstCard) => {
  // if there is a face down match for the firstCard that is previously exposed, return that card
  const sc = cards.filter(c => c.exposedClicks.length > 0 && c.index !== firstCard.index && c.name === firstCard.name);
  return sc.length > 0 ? sc[0] : nextUnexposed(cards, firstCard);
} 


export const suggestNextCard = (cards) => {
  const cc = cards.find(c => !c.isMatched);
  if(!cc){
    return null;
  }

  const flippedCard = cards.find(c => c.isFlipped);
  let nextCard = null;

  if(flippedCard) {
    nextCard = secondCard(cards, flippedCard);
  } else {
    const p = exposedMatchedPair(cards);
    nextCard = p ? p.first : nextUnexposed(cards);
  }

  return nextCard;
}
 