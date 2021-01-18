import { createStore, combineReducers } from 'redux';
import { test } from './test';

const rootReducers = combineReducers({
  test
});

export const store = createStore(rootReducers);