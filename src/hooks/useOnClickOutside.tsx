import { RefObject, useEffect } from 'react';

export type ClickEvent = MouseEvent | TouchEvent;

/**
 * Initializes a click/touch outside event listener to trigger a handler function.
 *
 * @param {RefObject<T>} ref - Reference to the HTMLElement to detect clicks outside of.
 * @param {(event: ClickEvent) => void} handler - The function to call when a click/touch is detected outside the element.
 * @return {void} Returns a cleanup function to remove the event listeners.
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: ClickEvent) => void,
): void => {
	useEffect(() => {
		const listener = (event: ClickEvent) => {
			const el = ref.current;
			if (!el || el.contains((event?.target as Node) || null)) {
				return;
			}

			handler(event); // Call the handler only if the click is outside of the element passed.
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]); // Reload only if ref or handler changes
};
