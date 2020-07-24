import manageFoods from './reducers/foodReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import manageCart from './reducers/cartReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({manageFoods, manageCart})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;