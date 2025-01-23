export const setCurrentPlayer = (currentPlayer) => {
	return {
		type: 'SET_CURRENT_PLAYER',
		payload: currentPlayer === 'X' ? 'O' : 'X',
	};
};
