import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
describe('LandingPage', () => {
  it('should render correctly', () => {
    const component = shallow(<Footer/>);
    expect(component).toMatchSnapshot();
  });
});