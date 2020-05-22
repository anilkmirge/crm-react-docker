import React from 'react';
import { shallow } from 'enzyme';
import Users from './User';

describe('User component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Users userToken={'asdf'} />);
	});

	it('should have user details', () => {
		expect(component.containsMatchingElement(Users)).toBe(true);
	});
});
