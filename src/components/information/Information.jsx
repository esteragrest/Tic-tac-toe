import { useState, useEffect } from 'react';
import { store } from '../../store';
import styles from './information.module.css';

export const Information = () => {
	const [state, setState] = useState(store.getState());
	const { currentPlayer, isGameEnded, isDraw } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const draw = <h2>Ничья!</h2>;
	const playerVictory = <h2>Победа: {currentPlayer}</h2>;
	const playerMove = <h2>Ходит: {currentPlayer}</h2>;

	return (
		<div className={styles.statusgame}>
			{isDraw ? draw : isDraw === false && isGameEnded ? playerVictory : playerMove}
		</div>
	);
};
