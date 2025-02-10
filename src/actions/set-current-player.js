import { ACTION_TYPES } from './action-types';

export const setCurrentPlayer = (currentPlayer) => {
	return {
		type: ACTION_TYPES.SET_CURRENT_PLAYER,
		payload: currentPlayer === 'X' ? 'O' : 'X',
	};
};
