import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './rootReducer';

export default function configureStore() {
  let store = createStore(
    combineReducers,
    applyMiddleware(thunk),
  )
  return store
}

