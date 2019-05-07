import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/combineReducer';
let createAppStore = applyMiddleware(thunk)(createStore);
export const Store = createAppStore(reducers);