import {SORT_NAME_DEC} from '../components/Rappers/constants';

export const init = () => (
    { 
        errorMessage: null,
        isLoading: false,
        showActive: false,
        zodiacFilter: '',
        searchFilter: '',
        sortMode: SORT_NAME_DEC
    });