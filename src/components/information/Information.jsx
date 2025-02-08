// import { useSelector } from 'react-redux';
// import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import styles from './information.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

// export const Information = () => {
// 	const currentPlayer = useSelector(selectCurrentPlayer);
// 	const isGameEnded = useSelector(selectIsGameEnded);
// 	const isDraw = useSelector(selectIsDraw);

// 	const draw = <h2>Ничья!</h2>;
// 	const playerVictory = <h2>Победа: {currentPlayer}</h2>;
// 	const playerMove = <h2>Ходит: {currentPlayer}</h2>;

// 	return (
// 		<div className={styles.statusgame}>
// 			{isDraw ? draw : isDraw === false && isGameEnded ? playerVictory : playerMove}
// 		</div>
// 	);
// };

export class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { currentPlayer, isDraw, isGameEnded } = this.props;

		const draw = <h2>Ничья!</h2>;
		const playerVictory = <h2>Победа: {currentPlayer}</h2>;
		const playerMove = <h2>Ходит: {currentPlayer}</h2>;

		return (
			<div className={styles.statusgame}>
				{isDraw
					? draw
					: isDraw === false && isGameEnded
						? playerVictory
						: playerMove}
			</div>
		);
	}
}

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
