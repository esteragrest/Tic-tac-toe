import { ACTION_TYPES } from '../actions';

export const initialGameStatusState = {
	isGameEnded: false,
	isDraw: false,
};

export const gameStatusReducer = (state = initialGameStatusState, action) => {
	const { type } = action;
	switch (type) {
		case ACTION_TYPES.DECLARE_WINNER:
			return { ...state, isGameEnded: true };
		case ACTION_TYPES.DECLARE_DRAW:
			return { ...state, isGameEnded: true, isDraw: true };
		case ACTION_TYPES.RESTART_GAME:
			return initialGameStatusState;
		default:
			return state;
	}
};
