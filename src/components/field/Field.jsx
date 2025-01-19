import { useState, useEffect } from 'react';
import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../data';
import { store } from '../../store';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	const { field, currentPlayer, isGameEnded } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });
		checkResult(newField);
	};

	const checkResult = (field) => {
		for (let combo of WIN_PATTERNS) {
			const [a, b, c] = combo;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				store.dispatch({ type: 'DECLARE_WINNER' });
				return;
			}
		}
		if (!field.includes('')) {
			store.dispatch({ type: 'DECLARE_DRAW' });
			return;
		}
		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: currentPlayer === 'X' ? 'O' : 'X',
		});
	};
	return <FieldLayout handleCellClick={handleCellClick} />;
};
