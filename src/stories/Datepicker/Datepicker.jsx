import React from 'react';
import DSDatepicker from '../components/Datepicker'
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSDatepicker = ({ 
    customClasses,
    errorMessage,
    hasError = false,
    hintMessage,
    disabledDays,
    inputId,
    isDisabled = false,
    isRange = false,
    isRequired = false,
    isSimple = false,
    label,
    offset,
    placeholder,
    range,
    selectedDay,
    showOnTop = false
}) => {
    return (
        <DSDatepicker
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            disabledDays={disabledDays}
            inputId={inputId}
            isDisabled={isDisabled}
            isRange={isRange}
            isRequired={isRequired}
            isSimple={isSimple}
            label={label}
            offset={offset}
            placeholder={placeholder}
            range={range}
            selectedDay={selectedDay}
            showOnTop={showOnTop}
        />
    );
};

QDSDatepicker.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    disabledDays: PropTypes.oneOf(['past', 'future']),
    inputId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRange: PropTypes.bool,
    isRequired: PropTypes.bool,
    isSimple: PropTypes.bool,
    label: PropTypes.string,
    offset: PropTypes.number,
    placeholder: PropTypes.string,
    range: PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string
    }),
    selectedDay: PropTypes.string,
    showOnTop: PropTypes.bool
};