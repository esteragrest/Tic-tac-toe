export const initialFieldState = {
	field: ['', '', '', '', '', '', '', '', ''],
};

export const fieldReducer = (state = initialFieldState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_FIELD':
			return { ...state, field: payload };
		case 'RESTART_GAME':
			return initialFieldState;
		default:
			return state;
	}
};
