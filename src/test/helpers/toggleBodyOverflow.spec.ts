import {
	toggleBodyOverflow,
	ToggleBodyOverflowProps,
} from '../../helpers/toggleBodyOverflow';

describe('toggleBodyOverflow', () => {
	beforeEach(() => {
		document.body.classList.remove('overflow');
		document.body.classList.remove('blur');
	});

	it('adds overflow class without blur', () => {
		const props: ToggleBodyOverflowProps = {
			action: 'add',
			overflowClass: 'overflow',
		};
		toggleBodyOverflow(props);
		expect(document.body.classList.contains('overflow')).toBe(true);
	});

	it('removes overflow class without blur', () => {
		document.body.classList.add('overflow');
		const props: ToggleBodyOverflowProps = {
			action: 'remove',
			overflowClass: 'overflow',
		};
		toggleBodyOverflow(props);
		expect(document.body.classList.contains('overflow')).toBe(false);
	});

	it('adds overflow class with blur', () => {
		const props: ToggleBodyOverflowProps = {
			action: 'add',
			overflowClass: 'overflow',
			blur: {
				enabled: true,
				class: 'blur',
				delay: 100,
			},
		};
		toggleBodyOverflow(props);
		expect(document.body.classList.contains('overflow')).toBe(true);
		setTimeout(() => {
			expect(document.body.classList.contains('blur')).toBe(true);
		}, 100);
	});

	it('removes overflow class with blur', () => {
		document.body.classList.add('overflow');
		document.body.classList.add('blur');
		const props: ToggleBodyOverflowProps = {
			action: 'remove',
			overflowClass: 'overflow',
			blur: {
				enabled: true,
				class: 'blur',
				delay: 100,
			},
		};
		toggleBodyOverflow(props);
		expect(document.body.classList.contains('blur')).toBe(false);
		setTimeout(() => {
			expect(document.body.classList.contains('overflow')).toBe(false);
		}, 100);
	});
});
