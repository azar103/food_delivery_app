import manageFoods from './reducers/foodReducer';
import {createStore} from 'redux';

const store = createStore(manageFoods);

export default store;