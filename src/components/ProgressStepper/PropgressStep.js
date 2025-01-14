import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressStep = ({
    isCancelled,
    isError,
    isCompleted,
    isCurrent,
    isVertical,
    isWarning,
    showNumbers,
    stepLabel,
    subLabel
}) => {
    return (
        <div
            tabIndex="-1"
            aria-label="step"
            className={classNames('ds-step', {
                completed: isCompleted,
                current: isCurrent,
                error: isError,
                warning: isWarning,
                cancelled: isCancelled
            })}
        >
            <span className="ds-flex --start-center">
                <span className="--dash"></span>
                <span className="--dot">
                    {showNumbers ? showNumbers : null}
                </span>
                <span className="--dash"></span>
            </span>
            {stepLabel && (
                <label
                    className={classNames('ds-step__label', {
                        'ds-flex --row --wrap': subLabel,
                        '--start-start': isVertical,
                        '--center-start': !isVertical
                    })}
                >
                    <span>{stepLabel}</span>
                    {subLabel && (
                        <div className="--sub-label" aria-label={subLabel}>
                            <span>{subLabel}</span>
                        </div>
                    )}
                </label>
            )}
        </div>
    );
};

ProgressStep.propTypes = {
    isCancelled: PropTypes.bool,
    isError: PropTypes.bool,
    isCompleted: PropTypes.bool,
    isCurrent: PropTypes.bool,
    isVertical: PropTypes.bool,
    isWarning: PropTypes.bool,
    showNumbers: PropTypes.number,
    stepLabel: PropTypes.string,
    subLabel: PropTypes.string
};

export default ProgressStep;
