import { useState } from 'react';
import styles from './App.module.css';

export const ValidForm = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);
		let error = null;

		if (!/^[\w_]*$/.test(target.value)) {
			error = 'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание';
		} else if (target.value.length > 30) {
			error = 'Неверный логин. Максимальная длинна 20 символов';
		}
		setLoginError(error);
	};

	const onLoginBlur = () => {
		if (login.length < 3) {
			setLoginError('Неверный логин. Минимальная длинна 3 символа');
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(login);
	};

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input
					type="email"
					name="email"
					value={login}
					placeholder="Логин"
					onBlur={onLoginBlur}
					onChange={onLoginChange}
				/>
				<button type="submit" disabled={loginError !== null}>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
