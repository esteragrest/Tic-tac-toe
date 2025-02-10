import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../data';
import { setCurrentPlayer, setField, ACTION_TYPES } from '../../actions';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectField, selectCurrentPlayer, selectIsGameEnded } from '../../selectors';
export class FieldContainer extends Component {
	constructor(props) {
		super(props);
	}

	handleCellClick = (index) => {
		const { field, currentPlayer, isGameEnded, dispatch } = this.props;

		if (field[index] !== '' || isGameEnded) {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));
		this.checkResult(newField);
	};

	checkResult = (field) => {
		const { dispatch, currentPlayer } = this.props;
		for (let combo of WIN_PATTERNS) {
			const [a, b, c] = combo;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				dispatch({ type: ACTION_TYPES.DECLARE_WINNER });
				return;
			}
		}
		if (!field.includes('')) {
			dispatch({ type: ACTION_TYPES.DECLARE_DRAW });
			return;
		}
		dispatch(setCurrentPlayer(currentPlayer));
	};

	render() {
		return <FieldLayout handleCellClick={this.handleCellClick} />;
	}
}

FieldContainer.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
	field: selectField(state),
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);
