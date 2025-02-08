import styles from './field.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

// export const FieldLayout = ({ handleCellClick }) => {
// 	const field = useSelector(selectField);

// 	return (
// 		<div className={styles.gameboard}>
// 			{field.map((item, index) => {
// 				const cellClass = `${styles.cell} ${item === 'X' ? styles.cross : styles.zero}`;
// 				return (
// 					<div
// 						className={cellClass}
// 						key={index}
// 						onClick={() => handleCellClick(index)}
// 					>
// 						{item}
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

export class FieldLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { field, handleCellClick } = this.props;
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
	}
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
};
