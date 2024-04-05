import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const moveForward = () => setActiveIndex(activeIndex + 1);
	const moveBack = () => setActiveIndex(activeIndex - 1);
	const moveStart = () => setActiveIndex(0);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id }, index) => (
							<li
								className={`${styles['steps-item']} ${index <= activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
								key={id}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => {
										setActiveIndex(index);
									}}
								>
									{+id}
								</button>
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={moveBack}
							disabled={activeIndex === 0}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={activeIndex !== 6 ? moveForward : moveStart}
						>
							{activeIndex !== 6 ? 'Далее' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
