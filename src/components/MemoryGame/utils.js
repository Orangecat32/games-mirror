
export const iconNames = ['time', 'grid', 'wrench','cog', 'flag','star','airplane','key','globe','dollar','flash','heart'];
export const ICON_COUNT = 12; 

// build the cards array
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

// matching of cards is based on the  image  name
export const isMatchedCard = (iconNames, card) => (iconNames || []).some(name => name === card.name);

// flipped state is based on the card index
export const isFlippedCard = (flippedIndices, card) => (flippedIndices || []).some(index => index === card.index);

//  return true if this is the card that is the second flip and it is not a match for the first
export const isUnmatchedCard = (cards, flippedIndices,card) => {
  if(flippedIndices.length === 2 && card.index === flippedIndices[1]) {
    const j = flippedIndices[0];
    const k = flippedIndices[1];
    const name1 = cards.find(c => c.index === j).name;
    const name2 = cards.find(c => c.index === k).name;
    return name1 !== name2;
  } 

  return false;
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
