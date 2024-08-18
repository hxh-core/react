import { YandexMetricaProvider } from 'next-yandex-metrica';
import type { InitParameters } from 'next-yandex-metrica/dist/lib/types/parameters';
import React, { type FC } from 'react';

export interface YandexMetrikaProps {
	children: React.ReactNode;
	options: {
		tagID: number;
		initParameters?: InitParameters;
		shouldUseAlternativeCDN?: boolean;
	};
}

export const YandexMetrikaWrapper: FC<YandexMetrikaProps> = ({
	children,
	options,
}) => {
	return (
		<YandexMetricaProvider
			tagID={options.tagID}
			initParameters={options.initParameters}
			shouldUseAlternativeCDN={options.shouldUseAlternativeCDN}
		>
			{children}
		</YandexMetricaProvider>
	);
};
