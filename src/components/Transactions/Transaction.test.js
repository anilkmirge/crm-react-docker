import React from 'react';
import { shallow } from 'enzyme';
import Transactions from './Transaction';

describe('Transaction component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Transactions userToken={'asdf'} />);
	});

	it('should have user details', () => {
		expect(component.containsMatchingElement(Transactions)).toBe(true);
	});
});
