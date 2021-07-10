/***********************************************************************************************
 * File : Header
 * Desc : Header with Home Link
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
const Header = () => {
    return (
        <div>
            <Link to="/" className="nav-link text-center">
                REAL W<i className="bi bi-vinyl-fill"></i>RLD
            </Link>
        </div>
    );
}

export default Header;