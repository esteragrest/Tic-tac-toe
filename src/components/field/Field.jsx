import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { selectField, selectCurrentPlayer, selectIsGameEnded } from '../../selectors';
import { DECLARE_WINNER, setCurrentPlayer, DECLARE_DRAW, setField } from '../../actions';

export const Field = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const dispatch = useDispatch();

	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return;
		}
		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));
		checkResult(newField);
	};

	const checkResult = (field) => {
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
	return <FieldLayout handleCellClick={handleCellClick} />;
};
