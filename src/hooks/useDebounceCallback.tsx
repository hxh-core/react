import { useEffect, useRef } from 'react';

/**
 * Returns a debounced version of the provided callback function. The debounced function will delay
 * invoking the callback until after `wait` milliseconds have elapsed since the last time the debounced
 * function was invoked. The debounced function can be cancelled by invoking it with no arguments.
 *
 * @template A - The type of the arguments passed to the callback function.
 * @param {(...args: A) => void} callback - The function to be debounced.
 * @param {number} wait - The number of milliseconds to delay.
 * @return {(...args: A) => void} - The debounced function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounceCallback = <A extends any[]>(
	callback: (...args: A) => void,
	wait: number,
): ((...args: A) => void) => {
	const argsRef = useRef<A>();
	const timeout = useRef<ReturnType<typeof setTimeout>>();

	function cleanup() {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
	}

	useEffect(() => cleanup, []);

	return function debouncedCallback(...args: A) {
		argsRef.current = args;

		cleanup();

		timeout.current = setTimeout(() => {
			if (argsRef.current) {
				callback(...argsRef.current);
			}
		}, wait);
	};
};
