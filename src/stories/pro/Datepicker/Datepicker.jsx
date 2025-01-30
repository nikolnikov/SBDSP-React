import React from 'react';
import DSDatePicker from '../components/DatePicker'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!../../assets/css/dsp.css';

export const Datepicker = ({ 
    customClasses,
    errorMessage,
    hasError = false,
    hintMessage,
    disabledDays,
    inputId,
    isDisabled = false,
    isRange = false,
    isRequired = false,
    label,
    offset,
    placeholder,
    showOnTop = false
}) => {
    return (
        <DSDatePicker
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            disabledDays={disabledDays}
            inputId={inputId}
            isDisabled={isDisabled}
            isRange={isRange}
            isRequired={isRequired}
            label={label}
            offset={offset}
            placeholder={placeholder}
            showOnTop={showOnTop}
        />
    );
};

Datepicker.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    disabledDays: PropTypes.oneOf(['past', 'future']),
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    offset: PropTypes.number,
    placeholder: PropTypes.string,
    showOnTop: PropTypes.bool
};