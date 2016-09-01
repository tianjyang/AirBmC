import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SearchMiddleware from './search_middleware';

export default applyMiddleware(
  SessionMiddleware,
  SearchMiddleware
);
