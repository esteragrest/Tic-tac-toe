const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };
		case 'SET_FIELD':
			return { ...state, field: payload };
		case 'DECLARE_WINNER':
			return { ...state, isGameEnded: true };
		case 'DECLARE_DRAW':
			return { ...state, isDraw: true };
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
