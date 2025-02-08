import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../data';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectField, selectCurrentPlayer, selectIsGameEnded } from '../../selectors';
import { DECLARE_WINNER, setCurrentPlayer, DECLARE_DRAW, setField } from '../../actions';
import { Component } from 'react';
import PropTypes from 'prop-types';

// export const Field = () => {
// 	const field = useSelector(selectField);
// 	const currentPlayer = useSelector(selectCurrentPlayer);
// 	const isGameEnded = useSelector(selectIsGameEnded);
// 	const dispatch = useDispatch();

// 	const handleCellClick = (index) => {
// 		if (field[index] !== '' || isGameEnded) {
// 			return;
// 		}
// 		const newField = [...field];
// 		newField[index] = currentPlayer;
// 		dispatch(setField(newField));
// 		checkResult(newField);
// 	};

// 	const checkResult = (field) => {
// 		for (let combo of WIN_PATTERNS) {
// 			const [a, b, c] = combo;
// 			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
// 				dispatch(DECLARE_WINNER);
// 				return;
// 			}
// 		}
// 		if (!field.includes('')) {
// 			dispatch(DECLARE_DRAW);
// 			return;
// 		}
// 		dispatch(setCurrentPlayer(currentPlayer));
// 	};
// 	return <FieldLayout handleCellClick={handleCellClick} />;
// };

export class Field extends Component {
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
				dispatch(DECLARE_WINNER);
				return;
			}
		}
		if (!field.includes('')) {
			dispatch(DECLARE_DRAW);
			return;
		}
		dispatch(setCurrentPlayer(currentPlayer));
	};

	render() {
		return <FieldLayout handleCellClick={this.handleCellClick} />;
	}
}

Field.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	dispatch: PropTypes.func,
};
