import {combineReducers} from 'redux';
import {testReducer} from '../models/TestModel';

export const rootReducer = combineReducers({
  test: testReducer
});
