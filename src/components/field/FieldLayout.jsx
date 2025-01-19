import { store } from '../../store';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ handleCellClick }) => {
	const { field } = store.getState();

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
