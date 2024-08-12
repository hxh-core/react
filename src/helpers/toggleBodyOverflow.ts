// 09.07.2024 / v.1.0.0
// Функция которая добавляет или удаляет overflow class в body

export interface ToggleBodyOverflowProps {
	action: 'add' | 'remove';
	overflowClass: string;
	blur?: {
		enabled: boolean;
		class: string;
		delay: number;
	};
}
export const toggleBodyOverflow = ({
	action,
	blur,
	overflowClass,
}: ToggleBodyOverflowProps) => {
	if (blur?.enabled) {
		if (action === 'add') {
			document.body.classList.add(overflowClass);
			setTimeout(() => {
				document.body.classList.add(blur.class);
			}, blur.delay);
			return;
		} else {
			document.body.classList.remove(blur.class);
			setTimeout(() => {
				document.body.classList.remove(overflowClass);
			}, blur.delay);
			return;
		}
	} else {
		document.body.classList[action](overflowClass);
		return;
	}
};
