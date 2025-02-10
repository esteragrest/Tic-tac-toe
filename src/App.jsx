import { Field, Information } from './components';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ACTION_TYPES } from './actions';

export class AppContainer extends Component {
	constructor(props) {
		super(props);
	}
	restartGame = () => {
		const { dispatch } = this.props;
		dispatch({ type: ACTION_TYPES.RESTART_GAME });
	};

	render() {
		return (
			<div className="flex justify-center items-center flex-col">
				<Information />
				<Field />
				<button
					className="text-white bg-sky-600 hover:bg-sky-700 p-3 rounded-full text-[20px]"
					onClick={this.restartGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

AppContainer.propTypes = {
	dispatch: PropTypes.func,
};

export const App = connect()(AppContainer);
