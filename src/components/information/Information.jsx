import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import styles from './information.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
export class InformationContainer extends Component {
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

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isDraw: selectIsDraw(state),
	isGameEnded: selectIsGameEnded(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);
