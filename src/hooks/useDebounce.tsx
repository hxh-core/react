import { useEffect, useState } from 'react';

/**
 * Returns a debounced value that updates after a specified delay.
 *
 * @template T - The type of the value to debounce.
 * @param {T} value - The value to debounce.
 * @param {number} [delay=500] - The delay in milliseconds before updating the debounced value.
 * @return {T} - The debounced value.
 */
export const useDebounce = <T,>(value: T, delay?: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
};
