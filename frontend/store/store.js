import { createStore } from 'redux';
import reducer from '../reducers/root_reducer';
import middleware from '../middleware/root_middleware';

const preloadedState = {
    // MatchingCars: {},
    // Reviews: {},
    // SearchField: {},
    session: {}
};


export default createStore(reducer,preloadedState,middleware);
