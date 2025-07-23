'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSProgressBar = ({ customClasses = [], fillPercentage }) => {
    return (
        <div
            className={classNames('ds-progressbar', customClasses)}
            role="progressbar"
        >
            <div
                className="--fill"
                style={{ width: `${fillPercentage}%` }}
                aria-label="Progress"
            ></div>
        </div>
    );
};

QDSProgressBar.propTypes = {
    customClasses: PropTypes.string,
    fillPercentage: PropTypes.number
};

export default QDSProgressBar;
