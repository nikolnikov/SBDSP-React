'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const QDSProgressBar = ({ customClasses = [], fillPercentage }) => {
    return (
        <div className={classNames('ds-progressbar', customClasses)}>
            <div
                className="--fill"
                style={{ width: `${fillPercentage}%` }}
                role="progressbar"
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
