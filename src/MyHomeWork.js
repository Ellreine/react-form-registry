import { useEffect, useState } from 'react';
import styles from './MyHomeWork.module.css';

export const MyHomeWork = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState('Емейл не может быть пустым');
	const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
	const [confirmPasswordError, setConfirmPasswordError] = useState('Подтверждение пароля не может быть пустым');
	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (emailError || passwordError || confirmPasswordError) {
			setFormValid(false);
		} else setFormValid(true);
	}, [emailError, passwordError, confirmPasswordError]);

	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некорректный емейл');
		} else setEmailError('');
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 6 || e.target.value.length > 16) {
			setPasswordError('Пароль должен быть длиннее 6 и не больше 16 символов');
			if (!e.target.value) {
				setPasswordError('Пароль не может быть пустым');
			}
		} else setPasswordError('');

		if (confirmPassword && e.target.value !== confirmPassword) {
			setConfirmPasswordError('Пароли не совпадают');
		} else setConfirmPasswordError('');
	};

	const confirmPasswordHandler = (e) => {
		setConfirmPassword(e.target.value);
		if (password !== e.target.value) {
			setConfirmPasswordError('Пароли не совпадают');
		} else setConfirmPasswordError('');
	};

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true);
				break;
			case 'password':
				setPasswordDirty(true);
				break;
			case 'confirmPassword':
				setConfirmPasswordDirty(true);
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1>Регистрация</h1>
				{emailDirty && emailError && <div className={styles.errorLabel}>{emailError}</div>}
				<input
					className={styles.inputField}
					onChange={(e) => emailHandler(e)}
					value={email}
					onBlur={(e) => blurHandler(e)}
					type="email"
					name="email"
					placeholder="Введите ваш email..."
				/>
				{passwordDirty && passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
				<input
					className={styles.inputField}
					onChange={(e) => passwordHandler(e)}
					value={password}
					onBlur={(e) => blurHandler(e)}
					type="password"
					name="password"
					placeholder="Введите ваш пароль..."
				/>
				{confirmPasswordDirty && confirmPasswordError && <div className={styles.errorLabel}>{confirmPasswordError}</div>}
				<input
					className={styles.inputField}
					onChange={(e) => confirmPasswordHandler(e)}
					value={confirmPassword}
					onBlur={(e) => blurHandler(e)}
					type="password"
					name="confirmPassword"
					placeholder="Подтвердите ваш пароль..."
				/>
				<button className={styles.submitButton} disabled={!formValid} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
