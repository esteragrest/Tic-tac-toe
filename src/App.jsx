import styles from './app.module.css';
import { Field, Information } from './components';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class AppContainer extends Component {
	constructor(props) {
		super(props);
	}
	restartGame = () => {
		const { dispatch } = this.props;
		dispatch({ type: 'RESTART_GAME' });
	};

	render() {
		return (
			<div className={styles.app}>
				<Information />
				<Field />
				<button className={styles.restart} onClick={this.restartGame}>
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
