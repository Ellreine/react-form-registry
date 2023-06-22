import { useState } from 'react';
import styles from './App.module.css';

const initialState = {
	email: '',
	login: '',
	password: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);
	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => {
			setState(initialState);
		},
	};
};

const sendData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const { getState, updateState, resetState } = useStore({
		email: '',
		login: '',
		password: '',
	});

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, login, password } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Почта"
					value={email}
					onChange={onChange}
				/>
				<input
					type="login"
					name="login"
					placeholder="Логин"
					value={login}
					onChange={onChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Пароль"
					value={password}
					onChange={onChange}
				/>
				<button type="submit">Отправить</button>
				<button type="button" onClick={resetState}>
					Сброс
				</button>
			</form>
		</div>
	);
};
