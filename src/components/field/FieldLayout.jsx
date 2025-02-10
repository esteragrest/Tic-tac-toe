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
			<div className="gameboard">
				{field.map((item, index) => {
					const cellClass = `cell ${item === 'X' ? 'text-sky-900' : 'text-sky-400'}`;
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
