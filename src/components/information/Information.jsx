import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import styles from './information.module.css';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const draw = <h2>Ничья!</h2>;
	const playerVictory = <h2>Победа: {currentPlayer}</h2>;
	const playerMove = <h2>Ходит: {currentPlayer}</h2>;

	return (
		<div className={styles.statusgame}>
			{isDraw ? draw : isDraw === false && isGameEnded ? playerVictory : playerMove}
		</div>
	);
};
