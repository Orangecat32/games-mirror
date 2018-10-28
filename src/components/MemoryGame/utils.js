

export const ICON_COUNT=12;


export const createCards = () => {
  // build the cards array
  let cards = [];
  for(let i=0, n = 0; i < ICON_COUNT; i++){
    let c1 = {index:n++, name:iconNames[i], flipped: false};
    let c2 = {index:n++, name:iconNames[i], flipped: false};
    cards.push(c1);
    cards.push(c2);
  }

  // shuffle the cards
  const randomIndices = randomArray(ICON_COUNT * 2);
  let randomCards = [];
  for(let i = 0; i < ICON_COUNT * 2; i++){
    randomCards[randomIndices[i] - 1] = cards[i];
  }

  console.log(randomCards);
  return randomCards;
}

export const setFlipState = (cards, flip) => {
  cards.map(c => {
    let cc = {...c};
    cc.flipped = flip;
    return cc;
  });
}

export const hideUnmatched = (cards) => {
  cards.map(c => {
    let cc = {...c};
    cc.flipped = c.matched;
    return cc;
  });
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

export const iconNames = ['time', 'grid', 'person','cog', 'flag','star','airplane','key','globe','dollar','flash','heart'];


