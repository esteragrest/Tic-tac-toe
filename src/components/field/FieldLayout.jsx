import styles from './field.module.css';
import { useSelector } from 'react-redux';
import { selectField } from '../../selectors';
import PropTypes from 'prop-types';

export const FieldLayout = ({ handleCellClick }) => {
	const field = useSelector(selectField);

	return (
		<div className={styles.gameboard}>
			{field.map((item, index) => {
				const cellClass = `${styles.cell} ${item === 'X' ? styles.cross : styles.zero}`;
				return (
					<div
						className={cellClass}
						key={index}
						onClick={() => handleCellClick(index)}
					>
						{item}
					</div>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	handleCellClick: PropTypes.func,
};
