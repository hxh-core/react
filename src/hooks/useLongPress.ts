import { useEffect, useState } from 'react';

export interface UseLongPressReturn {
	onMouseDown: () => void;
	onMouseUp: () => void;
	onMouseLeave: () => void;
	onTouchStart: () => void;
	onTouchEnd: () => void;
}

/**
 * Custom hook that enables a long press functionality.
 *
 * @param {Function} callback - The function to be executed on long press.
 * @param {number} ms - The duration threshold for a long press in milliseconds.
 * @return {Object} Object containing event handlers for different press interactions.
 */
export const useLongPress = (
	callback = () => {},
	ms = 300,
): UseLongPressReturn => {
	const [startLongPress, setStartLongPress] = useState(false);

	useEffect(() => {
		let timerId: NodeJS.Timeout | undefined = undefined;

		if (startLongPress) {
			timerId = setTimeout(callback, ms);
		} else {
			clearTimeout(timerId);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [callback, ms, startLongPress]);

	return {
		onMouseDown: () => setStartLongPress(true),
		onMouseUp: () => setStartLongPress(false),
		onMouseLeave: () => setStartLongPress(false),
		onTouchStart: () => setStartLongPress(true),
		onTouchEnd: () => setStartLongPress(false),
	};
};
