import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const HeaderNavigation = ({ children }) => (
    <div>
        <Header />
        <div className="container-fluid main h-100">
            <div tag="main" className="pt-3">
                {children}
            </div>
        </div>
    </div>
);

HeaderNavigation.propTypes = {
    children: PropTypes.object.isRequired,
};

export default HeaderNavigation;
