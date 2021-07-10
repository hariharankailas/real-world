import React from 'react';
import { shallow } from 'enzyme';
import PerformanceSummary from './PerformanceSummary';
import MyChart from '../Charts/MyChart';
import MyAreaChart from '../Charts/MyAreaChart';
import MyLineBar from '../Charts/MyLineBar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container =  shallow(<PerformanceSummary/>);
});

afterEach(() => {
  // cleanup
  container = null;
});

describe('LandingPage', () => {
  it('should render correctly', () => {
    expect(container).toMatchSnapshot();
  });

    it('on click of myAreaChart Button set state chartType to myChart', () => {
    const selectChartType = jest.spyOn(React, "useState");
    const setChartType = jest.fn();
    selectChartType.mockImplementation(chartType => [chartType, setChartType]);

    container.find('#myAreaChart').simulate('click');
    expect(container.find(MyAreaChart)).toHaveLength(1)
  });

  it('on click of myChart Button set state chartType to myChart', () => {
    const selectChartType = jest.spyOn(React, "useState");
    const setChartType = jest.fn();
    selectChartType.mockImplementation(chartType => [chartType, setChartType]);

    container.find('#myChart').simulate('click');
    expect(container.find(MyChart)).toHaveLength(1)
  });

  it('on click of myLineBar Button set state chartType to myChart', () => {
    const selectChartType = jest.spyOn(React, "useState");
    const setChartType = jest.fn();
    selectChartType.mockImplementation(chartType => [chartType, setChartType]);

    container.find('#myLineBar').simulate('click');
    expect(container.find(MyLineBar)).toHaveLength(1)
  });

  
});