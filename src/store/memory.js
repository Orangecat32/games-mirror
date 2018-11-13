import {createCards} from '../components/MemoryGame/utils';

export const init = () => ({ showAll:false, cards: createCards(), memoryClicks: 0});