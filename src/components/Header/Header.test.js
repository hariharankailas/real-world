import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
describe('LandingPage', () => {
  it('should render correctly', () => {
    const component = shallow(<Header/>);
    expect(component).toMatchSnapshot();
  });
});