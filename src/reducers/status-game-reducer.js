export const initialGameStatusState = {
	isGameEnded: false,
	isDraw: false,
};

export const gameStatusReducer = (state = initialGameStatusState, action) => {
	const { type } = action;
	switch (type) {
		case 'DECLARE_WINNER':
			return { ...state, isGameEnded: true };
		case 'DECLARE_DRAW':
			//если проблема с помедами и ничьей, убирать здесь
			return { ...state, isGameEnded: true, isDraw: true };
		case 'RESTART_GAME':
			return initialGameStatusState;
		default:
			return state;
	}
};
