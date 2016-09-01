import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SearchMiddleware from './search_middleware';
import ShowMiddleware from './show_middleware';

export default applyMiddleware(
  SessionMiddleware,
  SearchMiddleware,
  ShowMiddleware
);
