import { ACTION_TYPES } from '../actions';

export const initialFieldState = {
	field: ['', '', '', '', '', '', '', '', ''],
};

export const fieldReducer = (state = initialFieldState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_TYPES.SET_FIELD:
			return { ...state, field: payload };
		case ACTION_TYPES.RESTART_GAME:
			return initialFieldState;
		default:
			return state;
	}
};
