'use client';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ProgressStep from './PropgressStep';

const QDSProgressStepper = ({
    customClasses = [],
    isCancelled,
    isError,
    isWarning,
    hideLabels,
    lastCompletedStep = -1,
    isVertical,
    showNumbers,
    steps
}) => {
    if (steps.length === 0) {
        return null;
    } else if (lastCompletedStep > steps.length - 1) {
        return new Error(
            'The last completed step index must not be greater than the total number of steps.'
        );
    }

    const currentStep = lastCompletedStep + 1;

    return (
        <div
            className={classNames('ds-progress-stepper', customClasses, {
                '--vertical': isVertical
            })}
        >
            {steps.map((step, idx) => (
                <ProgressStep
                    key={idx}
                    showNumbers={showNumbers ? idx + 1 : null}
                    stepLabel={step.title ? (hideLabels ? '' : step.title) : ''}
                    subLabel={step.subTitle}
                    isCompleted={idx < currentStep}
                    isCurrent={idx === currentStep}
                    isCancelled={idx === isCancelled}
                    isError={idx === isError}
                    isWarning={idx === isWarning}
                    isVertical={isVertical}
                />
            ))}
        </div>
    );
};

QDSProgressStepper.propTypes = {
    customClasses: PropTypes.string,
    steps: PropTypes.array,
    hideLabels: PropTypes.bool,
    isCancelled: PropTypes.number,
    isError: PropTypes.number,
    isWarning: PropTypes.number,
    lastCompletedStep: PropTypes.number,
    isVertical: PropTypes.bool,
    showNumbers: PropTypes.bool
};

export default QDSProgressStepper;
