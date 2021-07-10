/***********************************************************************************************
 * File : PerformanceSummary
 * Desc : Page to display the performance data
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React, { useState, useEffect } from 'react';
import MyChart from '../Charts/MyChart';
import MyLineBar from '../Charts/MyLineBar';
import MyAreaChart from '../Charts/MyAreaChart';
import './PerformanceSummary.scss';
const PerformanceSummary = ({ performanceData, clearData }) => {
    const [chartType, setChartType] = useState('');

    useEffect(() => { setChartType('myAreaChart') },
        [performanceData]);
    /***************************************
    * Desc: render charts based on input
    * Date: 08-July-2021
    * ********************************/
    const renderChart = () => {
        switch (chartType) {
            case 'myChart':
                return <MyChart performanceData={ performanceData }/>;
            case 'myLineBar':
                return <MyLineBar performanceData={performanceData}/>;
            case 'myAreaChart':
                return <MyAreaChart performanceData={performanceData}/>;
            default : return <MyAreaChart performanceData={performanceData}/>
        }
    }
    
    return (
        <div className="container performance-summary-container">
            <h1>Performance Summary</h1>
            <div class="row performance-summary-chart">
                {renderChart()}
            </div>
            <div class="row performance-summary-toggle-chart">
                <div class="btn-group" role="group" aria-label="Chart Buttons">
                    <button type="button" id="myAreaChart" class="btn btn-success" onClick={ () => setChartType('myAreaChart')}>Area Chart</button>
                    <button type="button" id="myChart" class="btn btn-primary" onClick={ () => setChartType('myChart')}>Line Chart</button>
                    <button type="button" id="myLineBar" class="btn btn-secondary" onClick={ () => setChartType('myLineBar')}>Bar Chart</button>
                </div>
            </div>
               <div class="row mt-2 d-inline-flex performance-summary-toggle-chart">
                    <button type="button" class="btn btn-danger" onClick={clearData}>Clear Data</button>
            </div>
        </div>
    );
}

export default PerformanceSummary;