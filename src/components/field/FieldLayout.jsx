import styles from './field.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectField } from '../../selectors';
export class FieldLayoutContainer extends Component {
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

FieldLayoutContainer.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
	field: selectField(state),
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
