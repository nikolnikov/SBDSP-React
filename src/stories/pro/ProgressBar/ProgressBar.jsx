import React from 'react';
import DSProgressBar from '../components/ProgressBar';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.css';

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