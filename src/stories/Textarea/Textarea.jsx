import React from 'react';
import DSTextarea from '../components/Textarea';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const QDSTextarea = ({ 
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    isRequired = false,
    label,
    name,
    onChange,
    placeholder,
    value
}) => {
    return (
        <DSTextarea
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            isRequired={isRequired}
            label={label}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
    );
};

QDSTextarea.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
};