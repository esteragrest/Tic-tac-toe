import { ACTION_TYPES } from '../actions';

export const initialPlayerState = {
	currentPlayer: 'X',
};

export const playerReducer = (state = initialPlayerState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPES.SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: payload };
		case ACTION_TYPES.RESTART_GAME:
			return initialPlayerState;
		default:
			return state;
	}
};
