// 04.08.2024 / v.1.0.1/ Kirill Kireev
// Функция принимает на вход строку или массив строк
// Подставляет в начало ссылку и возвращает строку или массив строк

/**
 * Prepends a server URL to a string or an array of strings.
 *
 * @template T - The type of the input image source. It can be a string or an array of strings.
 * @param {T} imageSrc - The image source to modify.
 * @param {string} url - The server URL to prepend.
 * @return {T} The modified image source with the server URL prepended.
 */
export const setUrlBeforeUrl = <T extends string | string[]>(
	imageSrc: T,
	url: string,
): T => {
	if (Array.isArray(imageSrc)) {
		return imageSrc.map((src) => `${url}${src}`) as T;
	}

	return `${url}${imageSrc}` as T;
};
