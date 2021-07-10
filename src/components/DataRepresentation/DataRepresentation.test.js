import React from 'react';
import { shallow } from 'enzyme';
import DataRepresentation from './DataRepresentation';

describe('LandingPage', () => {
  it('should render correctly', () => {
    const component = shallow(<DataRepresentation/>);
    expect(component).toMatchSnapshot();
  });

  it('on click of clear button set comment list to []', () => {
    const component = shallow(<DataRepresentation />);
    const clearCommentList = jest.spyOn(React, "useState");
    const setCommentList = jest.fn();
   clearCommentList.mockImplementation(commentList => [commentList, setCommentList]);
      component
    .find('#clearButton')
        .simulate('click');
           expect(setCommentList).toBeTruthy();

  });
  
  it('on click of fetch Comments set commentList State', () => {
    const component = shallow(<DataRepresentation />);
    const selectCommentList = jest.spyOn(React, "useState");
    const setCommentList = jest.fn();
    selectCommentList.mockImplementation(commentList => [commentList, setCommentList]);
    component.find('#fetchButton').simulate('click');
    expect(setCommentList).toBeTruthy();

  });
  
});