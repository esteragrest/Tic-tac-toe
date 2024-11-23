import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../data';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}) => {
	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		checkResult(newField);
	};

	const checkResult = (field) => {
		for (let combo of WIN_PATTERNS) {
			const [a, b, c] = combo;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				setIsGameEnded(true);
				return;
			}
		}
		if (!field.includes('')) {
			setIsDraw(true);
			return;
		}
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};
	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
