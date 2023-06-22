import styles from './MyHomeWork.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const fieldsScheme = yup.object().shape({
	email: yup
		.string()
		.matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Некорректный емейл'),
	password: yup
		.string()
		.matches(/^[\w_]*$/, 'Должны использоваться буквы, цифры или нижнее подчёркивание.')
		.min(6, 'Пароль должен быть больше 6 символов')
		.max(16, 'Пароль должен быть не более 16 символов'),
	passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const MyHomeWorkRHF = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			passwordConfirm: '',
		},
		resolver: yupResolver(fieldsScheme),
		mode: 'onBlur',
	});

	const passwordConfirmError = errors.passwordConfirm?.message;
	const passwordError = errors.password?.message;
	const emailError = errors.email?.message;

	const onSubmit = (formData) => {
		reset({
			email: '',
			password: '',
			passwordConfirm: '',
		});
	};

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1>Регистрация</h1>
				<input name="email" placeholder="Введите емейл..." type="email" {...register('email')} className={styles.inputField} />
				<div className={styles.errorLabel}>{emailError}</div>

				<input name="password" placeholder="Введите пароль..." type="password" {...register('password')} className={styles.inputField} />
				<div className={styles.errorLabel}>{passwordError}</div>

				<input name="confirmPassword" placeholder="Повторите пароль..." type="password" {...register('passwordConfirm')} className={styles.inputField} />
				<div className={styles.errorLabel}>{passwordConfirmError}</div>

				<button type="submit" className={styles.submitButton} disabled={!!emailError || !!passwordError || !!passwordConfirmError}>
					Отправить
				</button>
			</form>
		</div>
	);
};
