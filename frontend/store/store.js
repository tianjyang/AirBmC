import { createStore } from 'redux';
import reducer from '../reducers/root_reducer';
import middleware from '../middleware/root_middleware';

const defaultPreloadedState = () => {
  let output = {
    session: {}
  };
  return output;
};


export default (preloadedState = defaultPreloadedState) => {
  return createStore(reducer,preloadedState,middleware);
};
