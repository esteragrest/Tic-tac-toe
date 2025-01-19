import styles from './app.module.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import { store } from './store';

export const App = () => {
	const restartGame = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div className={styles.app}>
			<Information />
			<Field />
			<button className={styles.restart} onClick={restartGame}>
				Начать заново
			</button>
		</div>
	);
};
