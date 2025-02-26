import React from 'react';
import DSProgressBar from '../components/ProgressBar';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const ProgressBar = ({ 
    customClasses = [],
    fillPercentage
}) => {
    return (
        <DSProgressBar
            customClasses={classNames(customClasses)}
            fillPercentage={fillPercentage}
        />
    );
};

ProgressBar.propTypes = {
    customClasses: PropTypes.array,
    fillPercentage: PropTypes.number
};