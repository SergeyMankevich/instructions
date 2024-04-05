import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);

	function onInputButtonClick() {
		const promptValue = prompt('Введите новое значение');
		if (promptValue.length < 3) {
			setIsValueValid(false);
			setError(promptValue);
		} else {
			setIsValueValid(true);
			setValue(promptValue);
			setError('');
		}
	}

	function onAddButtonClick() {
		if (value) {
			const date = new Date();
			const id = date.getTime();
			const updatedList = [...list, { id, value, date }];

			setList(updatedList);
			setValue('');
			setError('');
		}
	}

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && (
				<div className={styles.error}>
					Введенное значение должно содержать минимум 3 символа
				</div>
			)}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					onClick={onAddButtonClick}
					disabled={!isValueValid}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 && (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value, date }) => (
						<li className={styles['list-item']} key={id}>
							{value} {date.toLocaleDateString()}{' '}
							{date.toLocaleTimeString()}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
