import { createStore } from 'redux';
import reducer from '../reducers/root_reducer';

const preloadedState = {
    // MatchingCars: {},
    // Reviews: {},
    // SearchField: {},
    session: {}
};


export default createStore(reducer,preloadedState);
