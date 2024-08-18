# @hxh-core/react

`@hxh-core/react` fully supports **TypeScript**.

[RU documentation](https://github.com/hxh-core/react/wiki/Documentation-RU)

## Installation

Install the library with `npm`

```bash
npm install @hxh-core/react
```

or with `yarn`

```bash
yarn add @hxh-core/react
```

## Usage

### Helpers

`setUrlBeforeImageName` prepends the URL to the photo name. It can also be used with regular strings.

```typescript
setUrlBeforeImageName('image1.jpg', 'https://example.com/');
// Returns https://example.com/image1.jpg
// OR
const images = ['image1.jpg', 'image2.jpg'];
setUrlBeforeImageName(images, 'https://example.com/');
// Returns ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
```

`getNeedStyle` returns styles as **styles.active**

```typescript
getNeedStyle({
	isActive: true, // or your condition
	styles: styles, // module styles
	needStyle: styles.active,
});
// If needStyle is not passed, then by default returns styles.active
```

`closeModalOnPress` is used to close modal windows when pressing a button on the keyboard

```tsx
import { getNeedStyle, closeModalOnPress } from '@hxh-core/react/dist/helpers';
import styles from './TestComponent.module.css';

export const TestComponent = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div
			className={`${getNeedStyle({
				isActive: isOpenModal,
				styles,
				needStyle: styles.open,
			})}`}
			onKeyDown={(event) =>
				closeModalOnPress({
					event,
					key = 'Escape', // Default
					setIsOpen: setIsOpenModal,
					overflowClass: 'body-overflow', // If you add a class to body that adds overflow: hidden
				})
			}
		>
			{/* ...modal code */}
		</div>
	);
};
```

## Contribution to the project

We welcome any contributions to our project! Please read the [deposit guidelines](https://github.com/hxh-core/react/wiki/Contributing) before you begin.

## License

HxH is [MIT Licensed](https://github.com/hxh-core/react?tab=MIT-1-ov-file).

## Contacts

VK Group: [HxH Marketing](https://vk.com/hxh_marketing)

TG Creator: [Kireev Dev](https://t.me/ker4ik13)
