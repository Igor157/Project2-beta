import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AvailableCurrencies } from '../src/components/available-currencies/ik-available-currencies.component';

storiesOf('AvailableCurrencies', module)
	.add('AvailableCurrencies with content', () => (
		<AvailableCurrencies
			className="ik-currency-page__available-currencies"
			getCur={() => {}}
			cur={[
				{
					curAbr: 'AUD',
					curDifference: 0,
					curId: 170,
					curName: '',
					curRate: 1.5091,
					curScale: 1,
					date: 'April 9th 2018',
					endDate: '',
					startDate: ''
				},
				{
					curAbr: 'BGN',
					curDifference: 0,
					curId: 191,
					curName: '',
					curRate: 1.2292,
					curScale: 1,
					date: 'April 9th 2018',
					endDate: '',
					startDate: ''
				}
			]}
		/>
	));

