import styles from './app.module.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import { Component } from 'react';
import PropTypes from 'prop-types';

// export const App = () => {
// 	const dispatch = useDispatch();
// 	const restartGame = () => {
// 		dispatch({ type: 'RESTART_GAME' });
// 	};

// 	return (
// 		<div className={styles.app}>
// 			<Information />
// 			<Field />
// 			<button className={styles.restart} onClick={restartGame}>
// 				Начать заново
// 			</button>
// 		</div>
// 	);
// };

export class App extends Component {
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

App.propTypes = {
	dispatch: PropTypes.array,
};
