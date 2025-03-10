import React from 'react';
import DSProgressStepper from '../components/ProgressStepper';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSProgressStepper = ({ 
    customClasses = [],
    isCancelled,
    isError,
    isWarning,
    hideLabels = false,
    lastCompletedStep,
    isVertical = false,
    showNumbers = true,
    steps
}) => {
    return (
        <DSProgressStepper
            customClasses={classNames(customClasses)}
            isCancelled={isCancelled}
            isError={isError}
            isWarning={isWarning}
            hideLabels={hideLabels}
            lastCompletedStep={lastCompletedStep}
            isVertical={isVertical}
            showNumbers={showNumbers}
            steps={steps}
        />
    );
};

QDSProgressStepper.propTypes = {
    customClasses: PropTypes.string,
    steps: PropTypes.array,
    hideLabels: PropTypes.bool,
    isCancelled: PropTypes.number,
    isError: PropTypes.number,
    isWarning: PropTypes.number,
    isVertical: PropTypes.bool,
    lastCompletedStep: PropTypes.number,
    showNumbers: PropTypes.bool
};