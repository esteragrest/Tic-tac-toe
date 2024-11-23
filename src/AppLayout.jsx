import styles from './app.module.css';
import { Field } from './components/field/Field';
import { Information } from './components/information/Information';
import PropTypes from 'prop-types';

export const AppLayout = ({ gameState }) => {
	const {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		restartGame,
	} = gameState;

	return (
		<div className={styles.app}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			/>
			<button className={styles.restart} onClick={restartGame}>
				Начать заново
			</button>
		</div>
	);
};

AppLayout.propTypes = {
	gameState: PropTypes.object,
};
