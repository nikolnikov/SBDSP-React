import React from 'react';
import DSProgressStepper from '../../components/ProgressStepper';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { stepperData } from '../data';

export const ProgressStepper = ({ 
    customClasses = [],
    isCancelled,
    isError,
    isWarning,
    hideLabels = false,
    indexLastCompletedStep,
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
            indexLastCompletedStep={indexLastCompletedStep}
            isVertical={isVertical}
            showNumbers={showNumbers}
            steps={stepperData}
        />
    );
};

ProgressStepper.propTypes = {
    customClasses: PropTypes.string,
    steps: PropTypes.array,
    hideLabels: PropTypes.bool,
    isCancelled: PropTypes.number,
    isError: PropTypes.number,
    isWarning: PropTypes.number,
    indexLastCompletedStep: PropTypes.number,
    isVertical: PropTypes.bool,
    showNumbers: PropTypes.bool
};