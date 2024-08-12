import { getNeedStyle } from '../../helpers';

describe('getNeedStyle', () => {
	it('should return the active style if isActive is true', () => {
		const styles = { active: 'active-style' };
		const result = getNeedStyle({ isActive: true, styles });
		expect(result).toEqual('active-style');
	});

	it('should return an empty string if isActive is false', () => {
		const styles = { active: 'active-style' };
		const result = getNeedStyle({ isActive: false, styles });
		expect(result).toEqual('');
	});

	it('should return the specified needStyle if isActive is true and needStyle is provided', () => {
		const styles = { active: 'active-style' };
		const result = getNeedStyle({
			isActive: true,
			styles,
			needStyle: 'custom-style',
		});
		expect(result).toEqual('custom-style');
	});

	it('should return the default needStyle if isActive is true and needStyle is not provided', () => {
		const styles = { active: 'active' };
		const result = getNeedStyle({ isActive: true, styles });
		expect(result).toEqual('active');
	});
});
