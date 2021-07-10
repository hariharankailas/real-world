/***********************************************************************************************
 * File : LandingPage
 * Desc : Home Page With Navigation Bricks to other pages
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
const LandingPage = () => {
    return (
        <div className="container-fluid">
            <div className="row navigation-box-container">
                <div className="col-12 col-md-6">
                    <Link id="dataRepLink" to="/data-rep" >
                        <div className="navigation-box">
                            Data Representation
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6">
                    <Link id="perSumLink" to="/performance-summary">
                        <div className="navigation-box">
                        Performance Summary
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;