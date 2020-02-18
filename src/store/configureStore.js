import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { isProduction } from '../config';
import { loadStore, saveState } from './localStorage';
import ReducerT from './reducers/reducer';

export const rootReducer = combineReducers({
    ReducerT
});

const persistetState = loadStore();

const store = isProduction()
    ? createStore(rootReducer, persistetState, applyMiddleware(thunk))
    : createStore(rootReducer, persistetState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
