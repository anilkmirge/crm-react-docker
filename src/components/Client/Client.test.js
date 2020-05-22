import React from 'react';
import { shallow } from 'enzyme';
import Clients from './Client';


describe('Client component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Clients userToken= {'asdf'} />);
	});

	  it('should have client details', () => {
	expect(component.containsMatchingElement(Clients)).toBe(true)
		});
});
