export const initialPlayerState = {
	currentPlayer: 'X',
};

export const playerReducer = (state = initialPlayerState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };
		case 'RESTART_GAME':
			return initialPlayerState;
		default:
			return state;
	}
};
