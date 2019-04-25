import { createStore, compose } from 'redux';
import combineReducers from './rootReducer';

export default function configureStore() {
  const enhancer = [];
  const composedEnhancer = compose(...enhancer);
  let store = createStore(
    combineReducers,
    {},
    composedEnhancer
  )
  return store
}

