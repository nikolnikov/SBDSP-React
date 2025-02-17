'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressBar = ({ customClasses = [], completed, showPercentage }) => {
    return (
        <div className={classNames('ds-progress-wrap', customClasses)}>
            <div className="ds-progress-bar --rounded">
                <div
                    className="--fill"
                    style={{ width: `${completed ? completed : 0}%` }}
                ></div>
            </div>
            {showPercentage && (
                <span className="percentage">{completed ? completed : 0}%</span>
            )}
        </div>
    );
};

ProgressBar.propTypes = {
    customClasses: PropTypes.string,
    completed: PropTypes.number,
    showPercentage: PropTypes.bool
};

export default ProgressBar;
