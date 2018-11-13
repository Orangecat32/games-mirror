import {createCards, randomCardArray} from '../components/MemoryGame/utils';

export const init = () => ({ showAll:false, cards: createCards(randomCardArray()), memoryClicks: 0});