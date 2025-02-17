import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProgressStep = ({
    error,
    isCompleted,
    isCurrent,
    isVertical,
    showNumbers,
    sentBack,
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
                error: error,
                'sent-back': sentBack
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
                    className={`ds-flex --column ${
                        isVertical ? '--start-start' : '--center-center'
                    }`}
                    aria-label={stepLabel}
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
    error: PropTypes.bool,
    isCompleted: PropTypes.bool,
    isCurrent: PropTypes.bool,
    isVertical: PropTypes.bool,
    showNumbers: PropTypes.number,
    sentBack: PropTypes.bool,
    stepLabel: PropTypes.string,
    subLabel: PropTypes.string
};

export default ProgressStep;
