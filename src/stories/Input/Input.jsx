import React from 'react';
import DSInput from '../components/Input';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = ({
    customClasses = [],
    errorMessage,
    hasError = false,
    hintMessage,
    inputId,
    isDisabled = false,
    isLoading = false,
    isRequired = false,
    label,
    iconLeft,
    iconRight,
    name,
    onChange = () => {},
    placeholder,
    tooltipMessage,
    type
}) => {
    return (
        <DSInput
            customClasses={classNames(customClasses)}
            errorMessage={errorMessage}
            hasError={hasError}
            hintMessage={hintMessage}
            inputId={inputId}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isRequired={isRequired}
            label={label}
            iconLeft={iconLeft}
            iconRight={iconRight}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            tooltipMessage={tooltipMessage}
            type={type}
        />
    );
};

Input.propTypes = {
    customClasses: PropTypes.string,
    errorMessage: PropTypes.string,
    hasError: PropTypes.bool,
    hintMessage: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string.isRequired,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    tooltipMessage: PropTypes.string,
    type: PropTypes.string
};