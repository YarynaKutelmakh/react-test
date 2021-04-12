import { combineReducers, createStore } from 'redux';
import postReducer from './reducer';

export const store = createStore(
    combineReducers({
        posts: postReducer
    })

)

window.store = store;