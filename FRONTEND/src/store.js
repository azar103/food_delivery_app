import manageFoods from './reducers/foodReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import manageCart from './reducers/cartReducer';
import pressedButton from './reducers/pressedButtonReducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import { persistCombineReducers } from 'redux-persist'
const rootPersistConfig = {
    key: 'root',
    storage: storage
}
const rootReducer = persistCombineReducers(rootPersistConfig, {manageFoods, manageCart, pressedButton})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;