import React from 'react';
import { shallow } from 'enzyme';
import Communications from './Communications';

describe('User component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Communications userToken={'asdf'} />);
	});

	it('should have user details', () => {
		expect(component.containsMatchingElement(Communications)).toBe(true);
	});
});
