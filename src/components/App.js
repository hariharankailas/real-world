/***********************************************************************************************
 * File : App 
 * Desc : Container for the Application UI
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import DataRepresentation from './DataRepresentation/DataRepresentation';
import PerformanceSummary from './PerformanceSummary/PerformanceSummary';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const App = () => {
    const initialPerformance =
   [{
        name: `It 0`,
        duration: 0,
        amt: 0,
        cnt: 0
    }];
    const [performanceData, setPerformanceData] = useState(initialPerformance);

/***************************************
* Desc: Set performance data from local storage
* Date: 08-July-2021
* ********************************/
  useEffect(() => {
      if (localStorage.getItem('performanceData')) {
          setPerformanceData(JSON.parse(localStorage.getItem('performanceData')));
      }
  }, []);
    
    useEffect(() => {
        localStorage.setItem('performanceData',JSON.stringify(performanceData))
    }, [performanceData]);
    
    /***************************************
     * Desc: comments profiler callback
     * Date: 08-July-2021
     *  id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
     * ********************************/
    const commentCb = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
        console.log('call', startTime, commitTime, commitTime - startTime, phase);
        if (phase === 'mount') {
            setPerformanceData( (prevState) => {
                return [...prevState,
                    {
                    name: `It ${performanceData.length}`,
                    duration: actualDuration,
                    amt: baseDuration,
                    cnt: commitTime
                    
                }]
            });
        }
    }
    return (
        <div className="app-container">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact >
                        <LandingPage/>
                    </Route>
                    <Route path="/data-rep" exact>
                        <DataRepresentation commentCb={commentCb} />
                    </Route>
                    <Route path="/performance-summary" exact>
                        <PerformanceSummary performanceData={performanceData} clearData={() => setPerformanceData(initialPerformance)}/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;