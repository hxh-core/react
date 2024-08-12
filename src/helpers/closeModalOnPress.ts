// 04.08.2024 / v.1.0.0 / Kirill Kireev
// Меняет состояние модального окна при нажатии на клавишу

export interface CloseModalOnPressProps {
	event: KeyboardEvent;
	setIsOpen: (value: boolean) => void;
	overflowClass?: string;
	key?: string;
}
/**
 * Closes the modal when the specified key is pressed.
 *
 * @param {CloseModalOnPressProps} options - Object containing event, key, setIsOpen, and overflowClass.
 * @return {void} No return value.
 */
export const closeModalOnPress = ({
	event,
	key = 'Escape',
	setIsOpen,
	overflowClass = 'overflow',
}: CloseModalOnPressProps) => {
	if (event.key === key) {
		setIsOpen(false);
		document.body.classList.remove(overflowClass);
	}
};
