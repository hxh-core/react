import { useEffect } from 'react';

/**
 * useScrollTrigger
 *
 * Adds or removes a CSS class for elements based on scrolling.
 *
 * @param {string} className - The class of elements to track scrolling for.
 * @param {string} visibleClass - The class to add or remove based on scrolling conditions.
 * @param {number} [offset=30] - The offset from the bottom of the viewport (default: 30 pixels).
 */

export interface UseScrollTriggerProps {
	className: string;
	visibleClass: string;
	offset?: number;
}

export const useScrollTrigger = ({
	className,
	visibleClass,
	offset = 30,
}: UseScrollTriggerProps) => {
	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(`.${className}`);
			elements.forEach((element) => {
				// if (element instanceof HTMLElement) {
				const rect = element.getBoundingClientRect();
				const adjustedBottom = window.innerHeight - offset;

				if (rect.top <= adjustedBottom) {
					element.classList.add(visibleClass);
				} else if (rect.top > adjustedBottom) {
					element.classList.remove(visibleClass);
				}
				// }
			});
		};

		window.addEventListener('scroll', handleScroll);

		requestAnimationFrame(handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [className, visibleClass, offset]);
};
