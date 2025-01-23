import { createStore, combineReducers } from 'redux';
import { fieldReducer, gameStatusReducer, playerReducer } from './reducers';

const reducer = combineReducers({
	playerState: playerReducer,
	fieldState: fieldReducer,
	gameStatusState: gameStatusReducer,
});

export const store = createStore(reducer);
