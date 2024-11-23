import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	const draw = <h2>Ничья!</h2>;
	const playerVictory = <h2>Победа: {currentPlayer}</h2>;
	const playerMove = <h2>Ходит: {currentPlayer}</h2>;
	return (
		<div className={styles.statusgame}>
			{isDraw ? draw : isDraw === false && isGameEnded ? playerVictory : playerMove}
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
