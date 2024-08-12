// 04.08.2024 / v.1.0.0 / Kirill Kireev
// Функция возвращает active style, если проходит проверка

interface GetActiveStyleProps {
	isActive: boolean;
	styles: {
		readonly [key: string]: string;
	};
	needStyle?: string;
}

/**
 * Returns the active style if isActive is true, otherwise returns an empty string.
 *
 * @param {GetActiveStyleProps} props - An object containing isActive, styles, and needStyle properties.
 * @param {boolean} props.isActive - A boolean indicating whether the active style should be returned.
 * @param {Record<string, string>} props.styles - An object containing various styles.
 * @param {string} [props.needStyle='active'] - The style to return if isActive is true. Defaults to 'active'.
 * @return {string} The active style if isActive is true, otherwise an empty string.
 */
export const getNeedStyle = ({
	isActive,
	styles,
	needStyle = styles.active,
}: GetActiveStyleProps): string => {
	return isActive ? needStyle : '';
};
